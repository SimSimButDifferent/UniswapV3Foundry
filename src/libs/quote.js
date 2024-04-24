const ethers = require("ethers")
const { computePoolAddress } = require("@uniswap/v3-sdk")
const { Token } = require("@uniswap/sdk-core")
const { CurrentConfig } = require("../../config")
const Quoter = require("@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json")
const IUniswapV3PoolABI = require("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json")
const {
    POOL_FACTORY_CONTRACT_ADDRESS,
    QUOTER_CONTRACT_ADDRESS,
} = require("./constants")
const { getProvider } = require("./providers")
const { toReadableAmount, fromReadableAmount } = require("./conversion")

async function quote() {
    const quoterContract = new ethers.Contract(
        QUOTER_CONTRACT_ADDRESS,
        Quoter.abi,
        getProvider(),
    )

    const poolConstants = await getPoolConstants()

    const quotedAmountOut =
        await quoterContract.callStatic.quoteExactInputSingle(
            poolConstants.token0,
            poolConstants.token1,
            poolConstants.fee,
            fromReadableAmount(
                CurrentConfig.tokens.amountIn,
                CurrentConfig.tokens.in.decimals,
            ),
            0,
        )
    console.log(
        toReadableAmount(quotedAmountOut, CurrentConfig.tokens.out.decimals),
    )
    return toReadableAmount(quotedAmountOut, CurrentConfig.tokens.out.decimals)
}
async function getPoolConstants() {
    console.log("Token 0:", CurrentConfig.tokens.in)
    console.log("Token 1:", CurrentConfig.tokens.out)

    if (!CurrentConfig.tokens.in || !CurrentConfig.tokens.out) {
        console.error("One of the tokens is undefined.")
        return
    }
    const currentPoolAddress = computePoolAddress({
        factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
        fee: CurrentConfig.tokens.poolFee,
        token0: CurrentConfig.tokens.in,
        token1: CurrentConfig.tokens.out,
        initCodeHashManualOverride: 0,
    })

    const poolContract = new ethers.Contract(
        currentPoolAddress,
        IUniswapV3PoolABI.abi,
        getProvider(),
    )

    const [token0, token1, fee] = await Promise.all([
        poolContract.token0(),
        poolContract.token1(),
        poolContract.fee(),
    ])

    // Use token0, token1, and fee here

    return { token0, token1, fee }
}

quote().catch((error) => {
    console.error(error)
    process.exitCode = 1
})

exports.quote = quote
