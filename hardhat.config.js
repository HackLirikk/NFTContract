require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    bnbtestnet: {
      url: "https://wandering-thrumming-slug.bsc-testnet.discover.quiknode.pro/96ef0aef1b09333808b9a9a13ae3e8a3a8f8d148/",
      accounts: [
        "9bc4a756a8a852431229b40292391bd69fc59219d68718fc8671b2b4ef6b31b4"
      ],
    },
  },
  etherscan: {
    apiKey: "85TT2RJVGGN2CW8PRNGAQSIXIYWFDFYGQF",
  },
};
