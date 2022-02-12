/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL_MUMBAI, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.2",
   defaultNetwork: "mumbai",
   networks: {
      hardhat: {},
      mumbai: {
         url: API_URL_MUMBAI,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}