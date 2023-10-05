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
      accounts: [""], //COLE SUA CHAVE PRIVADA DENTRO DAS ASPAS
    },
  }
};
