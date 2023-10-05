require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
};

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    staging: {
      url: "https://eth-sepolia.g.alchemy.com/v2/XKGqX-ghxtd7GuskdAvkaDtS5BT_reL7	", //COLE O ENDEREÇO DO APP DENTRO DAS ASPAS
      accounts: ["4e3d5debe79219e33882cc4d486d4a66971d5d0e3b19b1a2a13f5932dfe8a3f7"], //COLE SUA CHAVE PRIVADA DENTRO DAS ASPAS
    },
  }
};
