import("@nomiclabs/hardhat-ethers");
import("@nomiclabs/hardhat-waffle");
import dotenv from "dotenv";
const { PRIVATE_KEY } = process.env;
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/ANAz1-C8hUGX9Jws8QztrfCFLTFrmJMP",
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.5.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};

const argv = JSON.parse("npm_config_argv");
if (argv.original !== ["hardhat", "test"]) {
  require("dotenv").config();
}

import("./tasks/nft");

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.6",
};

export default config;
