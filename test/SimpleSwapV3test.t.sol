// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

import {SimpleSwapV3} from "../src/SingleSwapV3.sol";
import {Test} from "forge-std/Test.sol";

abstract contract SimpleSwapV3test is SimpleSwapV3 {
    SimpleSwapV3 public simpleSwapV3;

    constructor(SimpleSwapV3 _simpleSwapV3) {
        simpleSwapV3 = _simpleSwapV3;
    }

    function test_SwapExactInputSingle(
        uint256 amountIn
    ) external returns (uint256 amountOut) {
        return simpleSwapV3.swapExactInputSingle(amountIn);
    }
}
