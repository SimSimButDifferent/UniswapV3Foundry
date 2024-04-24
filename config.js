const { FeeAmount } = require("@uniswap/v3-sdk")
const { USDC_TOKEN, WETH_TOKEN } = require("./src/libs/constants")

const CurrentConfig = {
    rpc: {
        local: "http://localhost:8545",
        mainnet:
            "https://eth-mainnet.g.alchemy.com/v2/VuIQG_PWKLrGJ3At5UsTBFVSaq97E41r",
    },
    tokens: {
        in: USDC_TOKEN,
        amountIn: 1000,
        out: WETH_TOKEN,
        poolFee: FeeAmount.MEDIUM,
    },
}

module.exports = { CurrentConfig }
