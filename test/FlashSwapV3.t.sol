// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

import {Test, console2} from "forge-std/Test.sol";
import {FlashSwapV3, IUniswapV3Pool, ISwapRouter, IERC20, IWETH9} from "../src/FlashSwapV3.sol";

address constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
address constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
address constant SWAP_ROUTER_02 = 0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45;
address constant DAI_WETH_POOL_3000 = 0xC2e9F25Be6257c210d7Adf0D4Cd6E3E881ba25f8;
address constant DAI_WETH_POOL_500 = 0x60594a405d53811d3BC4766596EFD80fd545A270;
uint24 constant FEE_0 = 3000;
uint24 constant FEE_1 = 500;

contract FlashSwapV3Test is Test {
    ISwapRouter constant router = ISwapRouter(SWAP_ROUTER_02);
    IWETH9 constant weth = IWETH9(WETH);
    IERC20 constant dai = IERC20(DAI);
    ISwapRouter constant swapRouter = ISwapRouter(SWAP_ROUTER_02);
    IUniswapV3Pool constant pool0 = IUniswapV3Pool(DAI_WETH_POOL_3000);
    IUniswapV3Pool constant pool1 = IUniswapV3Pool(DAI_WETH_POOL_500);
    FlashSwapV3 private flashSwapV3;

    uint256 private constant DAI_AMOUNT_IN = 10e18;

    function setUp() public {
        flashSwapV3 = new FlashSwapV3();

        weth.deposit{value: 500 ether}();
        weth.approve(address(router), 500 ether);

        router.exactInputSingle(
            ISwapRouter.ExactInputSingleParams({
                tokenIn: WETH,
                tokenOut: DAI,
                fee: FEE_0,
                recipient: address(this),
                deadline: block.timestamp,
                amountIn: 500 ether,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            })
        );
    }

    // function testFlashSwap() public {
    //     FlashSwapV3 flashSwap = new FlashSwapV3();
    //     weth.deposit{value: 1 ether}();
    //     weth.transfer(DAI_WETH_POOL_3000, 1 ether);
    //     weth.transfer(DAI_WETH_POOL_500, 1 ether);
    //     dai.transfer(DAI_WETH_POOL_3000, 1000 ether);
    //     dai.transfer(DAI_WETH_POOL_500, 1000 ether);
    //     flashSwap.flashSwap(DAI_WETH_POOL_3000, FEE_1, DAI, WETH, 1000 ether);
    //     flashSwap.flashSwap(DAI_WETH_POOL_500, FEE_0, WETH, DAI, 1000 ether);
    // }
}
