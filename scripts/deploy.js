async function main() {
    const Metaschool = await ethers.getContractFactory("Metaschool")
  
    // Start deployment, returning a promise that resolves to a contract object
    const metaschool = await Metaschool.deploy()
    await metaschool.deployed()
    console.log("Contract deployed to address:", metaschool.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  