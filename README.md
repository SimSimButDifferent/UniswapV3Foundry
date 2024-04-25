## Uniswap V3 testing boilerplate.

Building a functional testing environment that i can use as a clone to build any projects that use the Uniswap V3 protocol. Using the SDK and smart contracts together to build things.

**To get started...**

```bash
git clone https://github.com/SimSimButDifferent/UniswapV3Foundry.git
```

### Some commands to run

**Get a Quote**

quoteV1(params) function takes a pair object as defined inside **config.js**.

```bash
yarn hardhat run src/utils/quoteV1.js

Quoted Amount Out for Wrapped Ether : 3123.994209
Quoted Amount Out for Wrapped Bitcoin : 63760.640759
Quoted Amount Out for Aave Token : 86.160963
Quoted Amount Out for Curve DAO Token : 0.44082
Quoted Amount Out for Tether : 0.997499
Quoted Amount Out for Uniswap : 7.716985
Quoted Amount Out for Chainlink : 14.86376
Done in 4.82s.
```

**get Pool address**

getPoolConstants(_token0, _token1, _fee) takes two Token objects as defined in the **constants.js**.

```bash
yarn hardhat run src/utils/getPoolConstants.js

Current pool address for USDC / Aave Token is: 0xdceaf5d0E5E0dB9596A47C0c4120654e80B1d706
Done in 3.19s.
```

### Add more tokens

- Add new token objects to **constants.js**

- Add pairs to **config.js** file

