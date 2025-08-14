require("dotenv").config();
const express = require("express");
const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const cors = require("cors"); // <-- 1. ADD THIS LINE

const app = express();
app.use(cors()); // <-- 2. ADD THIS LINE
const upload = multer({ dest: "uploads/" });

// This lets your server understand JSON requests, which is good practice
app.use(express.json()); // <-- 3. ADD THIS LINE

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const formData = new FormData();
    formData.append("file", fs.createReadStream(file.path));

    const fileRes = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_API_SECRET,
        },
      }
    );

    const imageIpfsHash = fileRes.data.IpfsHash;
    fs.unlinkSync(file.path);

    const metadata = {
      name: "My Awesome NFT",
      description: "This NFT was created through my awesome app!",
      image: `ipfs://${imageIpfsHash}`,
    };

    const jsonRes = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      metadata,
      {
        headers: {
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_API_SECRET,
        },
      }
    );

    const metadataIpfsHash = jsonRes.data.IpfsHash;
    const tokenURI = `ipfs://${metadataIpfsHash}`;

    res.json({ success: true, tokenURI: tokenURI });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error uploading to Pinata" });
  }
});

app.listen(3001, () => {
  console.log("✅ Server listening on port 3001");
});
