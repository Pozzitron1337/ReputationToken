require("@nomicfoundation/hardhat-toolbox");
require('hardhat-contract-sizer');
require("dotenv").config();

const {
  INFURA_KEY, 
  MNEMONIC,
  ETHERSCAN_API_KEY,
  COINMARKETCAP_API_KEY
  } = process.env;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { 
        version: "0.8.9", 
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  networks:{
    hardhat: {
      forking: {
        url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      },
      allowUnlimitedContractSize: false,
      timeout: 9999999999,
      blockGasLimit: 1000_000_000,
      gas: 100_000_000,
      gasPrice: 30_000_000_000,
      accounts: {mnemonic: MNEMONIC}
    },
    private: {
      url: `https://192.`,
      gas: 100_000_000,
      gasPrice: 90_000_000_000,
      accounts: {mnemonic: MNEMONIC}
    },
    bsctest: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      gas: 2_000_000,
      gasPrice: 50_000_000_000,
      timeout: 99999999,
      accounts: {mnemonic: MNEMONIC}
    }
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
    strict: true,
    only: [],
  }
};
