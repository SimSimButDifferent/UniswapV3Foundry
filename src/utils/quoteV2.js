const { ethers } = require("hardhat")
const {
    abi: Quoter2Abi,
} = require("@uniswap/v3-periphery/artifacts/contracts/lens/QuoterV2.sol/QuoterV2.json")
const { getProvider } = require("./getProvider")
const { CurrentConfig } = require("../../config")

// Quoter Address

const QUOTER2_CONTRACT_ADDRESS = "0x61fFE014bA17989E743c5F6cB21bF9697530B21e"

/**
 * @dev Params configured in config.js file.
 * @param {
 * in: tokenIn,
 * out: tokenOut,
 * poolFee: fee,
 * amountIn: amountIn}
 * @returns {Promise<void>}
 * @description Quote the amount of tokenOut that will be received for the amountIn of tokenIn
 */
async function quoteV2(params) {
    // Create a new provider
    const provider = getProvider()

    // Create a new instance of the Quoter contract
    const quoter2 = new ethers.Contract(
        QUOTER2_CONTRACT_ADDRESS,
        Quoter2Abi,
        provider,
    )

    // Create a params object
    const paramsObj = {
        tokenIn: params.in.address,
        tokenOut: params.out.address,
        fee: params.poolFee,
        amountIn: params.amountIn,
        sqrtPriceLimitX96: 0,
    }

    // Call the quoteExactInputSingle function
    try {
        const output = await quoter2.callStatic.quoteExactInputSingle(paramsObj)

        // Log the amount of tokenOut that will be received
        console.log(
            `Quoted Amount of ${params.out.name} Out for ${ethers.utils.formatUnits(params.amountIn.toString(), params.in.decimals)} ${params.in.name} :`,
            ethers.utils.formatUnits(output.amountOut, 6),
        )
        console.log(`sqrtPriceLimitX96After: ${output.sqrtPriceLimitX96After}`)
        console.log(`Gas estimate: ${output.gasEstimate}`)

        return ethers.utils.formatUnits(output.amountOut, 6)
    } catch (error) {
        console.error("Error calling quoteExactInputSingle:", error)
    }
}

// quoteV2(CurrentConfig.WETHUSDC).catch((error) => {
//     console.error("Error in main function:", error)
//     process.exitCode = 1
// })
// quoteV2(CurrentConfig.USDTUSDC)

// quoteV2(CurrentConfig.WBTCUSDT)

// quoteV2(CurrentConfig.LINKUSDT)

// quoteV2(CurrentConfig.UNIUSDT)

// quoteV2(CurrentConfig.AAVEUSDC)

// quoteV2(CurrentConfig.CRVUSDT)

quoteV2(CurrentConfig.USDTAAVE)

exports.quoteV2 = quoteV2
