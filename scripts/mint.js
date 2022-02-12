require("dotenv").config()
const API_URL_MUMBAI = process.env.API_URL_MUMBAI
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PUBLIC_KEY_RECEIVER = "0x5AC3163754fc54FeA1541C7Fe1d707B5f7C4De84"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL_MUMBAI)

const contract = require("../artifacts/contracts/Metaschool.sol/Metaschool.json")
const contractAddress = "0x011E68A0Ee6aC6df7506c254fCE0c3Ba0692a92f"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce

  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 1000000,
    data: nftContract.methods.mintNFT(PUBLIC_KEY_RECEIVER, tokenURI).encodeABI(),
  }

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            )
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log("Promise failed:", err)
    })
}

mintNFT(
  "https://gateway.pinata.cloud/ipfs/QmPMGx9dAKUVQcXPhW1aquJ4o3MWzuJVzpvb1HQ3qVcGL9"
)
