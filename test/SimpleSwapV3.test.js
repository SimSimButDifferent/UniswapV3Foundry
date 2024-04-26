const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("SimpleSwapV3 contract", function () {
    const SimpleSwap = ethers.getContractFactory("SimpleSwapV3")
    const simpleswap = SimpleSwap.deploy()
})
