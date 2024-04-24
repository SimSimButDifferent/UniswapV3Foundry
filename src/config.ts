import { Token } from "@uniswap/sdk-core"
import { FeeAmount } from "@uniswap/v3-sdk"
import { USDC_TOKEN, WETH_TOKEN } from "./libs/constants"

interface TsConfig {
    rpc: {
        local: string
        mainnet: string
    }
    tokens: {
        in: Token
        amountIn: number
        out: Token
        poolFee: number
    }
}

export const CurrentConfig: TsConfig = {
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
