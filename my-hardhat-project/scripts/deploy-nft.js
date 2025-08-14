const hre = require("hardhat");

async function main() {
  console.log("Deploying AdminNFT contract...");

  // Get the contract factory. This is a class that knows how to create
  // instances of our contract.
  const AdminNFT = await hre.ethers.getContractFactory("AdminNFT");

  // Deploy the contract. This sends a transaction to the network.
  const adminNft = await AdminNFT.deploy();

  // Wait for the transaction to be mined and the contract to be deployed.
  await adminNft.waitForDeployment();

  // Get the contract's address after deployment.
  const contractAddress = await adminNft.getAddress();

  console.log(`✅ AdminNFT contract deployed to address: ${contractAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
