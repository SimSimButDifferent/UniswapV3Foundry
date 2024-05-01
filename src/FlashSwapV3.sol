// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@uniswap/v3-periphery/contracts/interfaces/external/IWETH9.sol";

address constant SWAP_ROUTER_02 = 0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45;

// DAI / WETH 0.3% swap fee (2000 DAI / WETH)
// DAI / WETH 0.05% swap fee (2100 DAI / WETH)
// 1. Flash swap on pool0 (receive WETH)
// 2. Swap on pool1 (WETH -> DAI)
// 3. Send DAI to pool0
// profit = DAI received from pool1 - DAI repaid to pool0

contract FlashSwapV3 {
    ISwapRouter constant router = ISwapRouter(SWAP_ROUTER_02);

    uint160 private constant MIN_SQRT_RATIO = 4295128739;
    uint160 private constant MAX_SQRT_RATIO =
        1461446703485210103287273052203988822378723970342;

    function flashSwap(
        address token0,
        address token1,
        uint24 fee0,
        uint24 fee1,
        uint256 amount0,
        uint256 amount1
    ) external {
        // IUniswapV3Pool pool0 = IUniswapV3Pool(
        //     IUniswapV3Pool(router.poolAddress(token0, token1, fee0))
        // );
        // IUniswapV3Pool pool1 = IUniswapV3Pool(
        //     IUniswapV3Pool(router.poolAddress(token1, token0, fee1))
        // );
        // require(pool0.slot0().sqrtPriceX96 >= MIN_SQRT_RATIO);
        // require(pool1.slot0().sqrtPriceX96 <= MAX_SQRT_RATIO);
        // // 1. Flash swap on pool0
        // bytes memory data = abi.encode(token0, token1, fee0, fee1, amount0);
        // pool0.swap(
        //     address(this),
        //     false,
        //     int256(amount0),
        //     int256(0),
        //     abi.encode(this, data)
        // );
    }
}
