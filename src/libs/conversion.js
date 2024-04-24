const { ethers } = require("ethers")

const READABLE_FORM_LEN = 4

function fromReadableAmount(amount, decimals) {
    return ethers.parseUnits(amount.toString(), decimals)
}

function toReadableAmount(rawAmount, decimals) {
    return ethers.formatUnits(rawAmount, decimals).slice(0, READABLE_FORM_LEN)
}

module.exports = { fromReadableAmount, toReadableAmount }
