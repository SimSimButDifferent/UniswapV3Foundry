const ethers = require("ethers")
const { CurrentConfig } = require("../../config")

// Provider Functions

function getProvider() {
    return new ethers.JsonRpcProvider(CurrentConfig.rpc.mainnet)
}

exports.getProvider = getProvider
