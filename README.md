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
To write and deploy this contract I used hardhat, ethers.js, alchemy-web3, alchemy, pinata and node.  
The smart contract itself is pretty simple, as most of the code inherits from openzepellin libraries, and template tutorials.  
We import the following contracts - 
* ERC 721 for creating the NFT, we usd the 721URIStorage extension instead of the standard 721,   
this extension allows us to store metadata according to the token ID, in the _tokenURIs mapping
* Counters to keep track of the total NFTs minted and assign a unique tokenId to each of them
* Ownable to make sure that only the owner of the contract can mint NFTs

We also create a mintNFT function in the contract, this contract takes in the address of the intended recipient along with the tokenURI.  
We make this function accessible to "onlyOwner" so that no one else can mint an NFT.  
We then increment our counter by 1, and  call the _mint() and _setToeknUri functions to mint the NFT and store the metadata respectively.  
This function returns the tokenID of the NFT minted.  

Other supplementary steps - 
1. Created a new staging project on alchemy and stored the API URL in the .env file
2. Hosted the metadata file on pinata, and added the image link to that metadata
3. Configured the hardhat config to add a new network and set the compiler version
4. Wrote the ddeploy.js file, which deployed the contract using ethers.js contract factory and returned the contract address to console
5. Used this address in the mint.js file, to make a call to the mintNFT function in the deployed contract using alchemy-web3
6. Called the mintNFT function with the tokenURI and sender address as parameters, and then ran node to run the mint.js file
7. Configured metamask to import the NFT tokens
And we were all done!

