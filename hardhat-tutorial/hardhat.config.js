require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const MATICVIRGIL_URL = process.env.MATICVIRGIL_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: MATICVIRGIL_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};