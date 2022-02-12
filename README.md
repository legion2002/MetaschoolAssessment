# Metaschool Assessment
Submisison for the metaschool assessment task, by Tanishk Goyal. ( Minting an NFT and airdropping to new address )

### Contract Deployed on Mumbai Testnet For Polygon - 
> Contract deployed to address: 0x011E68A0Ee6aC6df7506c254fCE0c3Ba0692a92f   

### Pinata Hosting of Metadata
> Metadata hosted at - https://gateway.pinata.cloud/ipfs/QmPMGx9dAKUVQcXPhW1aquJ4o3MWzuJVzpvb1HQ3qVcGL9  

### Minting NFT
> The hash of your transaction is:  0x84360ecad33cb721b77bdadb730cb4efe4b52c8de7c661d1a4b1fec958bd30d5

### Minted NFT in metamask
> ![image](https://user-images.githubusercontent.com/64212892/153723391-25fb5ade-9c46-423c-941d-0dfb501982ee.png)

### Addresses
> Owner Of The Contract - 0x326D4FF1fd7Bd2a6741192Aba6176300D3f4cA71
> NFT airdropped to Address - 0x5AC3163754fc54FeA1541C7Fe1d707B5f7C4De84

### Steps to change to Polgyon Mainnet
1. Change the alchemy url to a project made for polygon mainnet, in the .env file
2. Create a new network in the hardhat config file with this URL and call it polygon
3. Now redeploy the contract using npx hardhat --network polygon run scripts/deploy.js
4. Store the contract address of this new deployed contract and change the contractAddress in mint.js
5. run mint.js again!

### How the Program Works 
> We use openzeppeli
