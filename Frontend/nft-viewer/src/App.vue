<template>
  <div class="app-container">
    <BabylonScene :imageUrl="nftImageUrl" />

    <div class="ui-overlay">
      <h1>NFT Certificate Viewer</h1>
      <p>Enter an Ethereum address to see their first certificate.</p>
      <input type="text" v-model="addressInput" placeholder="0x..." />
      <button @click="viewCertificates">View Certificate</button>
      <p id="status">{{ statusMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ethers } from 'ethers';
import BabylonScene from './components/BabylonScene.vue';
import { contractAddress, contractABI, rpcUrl } from './config';

// --- Constants ---
const IPFS_GATEWAY = "https://ipfs.io/ipfs/";

// --- Component State ---
const addressInput = ref('');
const statusMessage = ref('');
const nftImageUrl = ref('');

// Helper function for updating the status and image
const updateStatus = (message, image = '') => {
  statusMessage.value = message;
  nftImageUrl.value = image;
};

// Main function to handle the entire process
async function viewCertificates() {
  const address = addressInput.value;

  // Basic validation
  if (!ethers.isAddress(address)) {
    updateStatus("Please enter a valid Ethereum address.");
    return;
  }

  updateStatus("Connecting to the blockchain...");

  try {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    const firstCertificateTokenId = await getFirstCertificateTokenId(contract, address);

    if (firstCertificateTokenId) {
      await displayCertificate(contract, firstCertificateTokenId);
    } else {
      updateStatus("This address does not own any certificates.");
    }
  } catch (error) {
    console.error("Error fetching certificates:", error);
    updateStatus("Could not fetch certificates. See console for details.");
  }
}

// Function to find the first certificate ID
async function getFirstCertificateTokenId(contract, address) {
  updateStatus("Searching for certificate transfer events...");
  const filter = contract.filters.Transfer(null, address);
  const events = await contract.queryFilter(filter);

  if (events.length > 0) {
    updateStatus(`Found ${events.length} certificates. Loading the first one...`);
    return events[0].args.tokenId;
  }
  return null;
}

// Function to fetch and display the NFT image
async function displayCertificate(contract, tokenId) {
  const tokenURI = await contract.tokenURI(tokenId);
  const metadataURL = tokenURI.replace("ipfs://", IPFS_GATEWAY);

  const response = await fetch(metadataURL);
  if (!response.ok) {
    throw new Error("Could not fetch metadata from IPFS.");
  }

  const metadata = await response.json();
  const imageUrl = metadata.image.replace("ipfs://", IPFS_GATEWAY);

  updateStatus(`Displaying Certificate #${tokenId.toString()}`, imageUrl);
}
</script>
