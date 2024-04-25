const { FeeAmount } = require("@uniswap/v3-sdk")
const { USDC_TOKEN, WETH_TOKEN } = require("./src/utils/constants")
const { ethers } = require("hardhat")

const CurrentConfig = {
    rpc: {
        local: "http://localhost:8545",
        mainnet:
            "https://eth-mainnet.g.alchemy.com/v2/VuIQG_PWKLrGJ3At5UsTBFVSaq97E41r",
    },
    quoteParams: {
        in: WETH_TOKEN.address,
        out: USDC_TOKEN.address,
        poolFee: FeeAmount.MEDIUM,
        amountIn: ethers.utils.parseEther("1"),
    },
}

module.exports = { CurrentConfig }
