// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

import {SimpleSwapV3, IERC20, ISwapRouter} from "../src/SingleSwapV3.sol";
import {Test, console} from "forge-std/Test.sol";
import {StdCheats} from "forge-std/StdCheats.sol";

contract SimpleSwapV3test is StdCheats, Test {
    SimpleSwapV3 public simpleSwapV3;

    ISwapRouter swapRouter =
        ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);

    address constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    uint256 constant amount = 100000 * 1e18;

    IERC20 public dai = IERC20(DAI);
    IERC20 public weth9 = IERC20(WETH9);

    address constant user = address(1);

    function setUp() external {
        simpleSwapV3 = new SimpleSwapV3(swapRouter);

        deal(DAI, user, amount);
        vm.prank(user);
        dai.approve(address(simpleSwapV3), type(uint256).max);
    }

    function test_SwapExactInputSingle() external {
        uint256 amountIn = 10000 * 1e18;

        assertEq(dai.balanceOf(address(this)), amount);

        uint256 dai_before = dai.balanceOf(address(this));
        uint256 weth9_before = weth9.balanceOf(address(this));
        console.log("amountIn", amountIn);
        console.log("Dai Balance before:", dai_before);
        console.log("Weth9 Balance before:", weth9_before);

        vm.prank(user);
        uint256 amountOut = simpleSwapV3.swapExactInputSingle(amountIn);

        uint256 dai_after = dai.balanceOf(address(this));
        uint256 weth_after = weth9.balanceOf(address(this));

        console.log("amountOut", amountOut);
        console.log("Dai Balance after:", dai_after);
        console.log("Weth9 Balance after:", weth_after);

        assertEq(dai_before - amountIn, dai_after);
    }
}
