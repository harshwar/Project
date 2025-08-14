require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.28", // Make sure this matches your pragma
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      // This is the crucial part that fixes the "mcopy" and "tload" errors
      evmVersion: "cancun",
    },
  },
};
