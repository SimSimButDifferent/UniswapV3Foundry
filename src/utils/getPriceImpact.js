const { ethers } = require("ethers")
const { getProvider } = require("./getProvider")

// Artifacts
const {
    abi: Quoter2Abi,
} = require("@uniswap/v3-periphery/artifacts/contracts/lens/QuoterV2.sol/QuoterV2.json")
const {
    abi: PoolAbi,
} = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json")
const {
    abi: FactoryAbi,
} = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json")
const { getProvider } = require("./getProvider")

const { abi: ERC20_ABI } = require("../../out/IERC20.sol/IERC20.json")

const { weth9Abi: WETH_ABI } = require("../../mainnetTokens.json")

// Contract addresses
const QUOTER2_ADDRESS = "0x61fFE014bA17989E743c5F6cB21bF9697530B21e"
const FACTORY_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984"
const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
const USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"

// Create a new provider
const provider = getProvider()

async function getPriceImpact() {}

getPriceImpact().catch((error) => {
    console.error("Error calling getPriceImpact:", error)
    process.exitCode = 1
})
