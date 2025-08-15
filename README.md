# My NFT Viewer Project

This repository is a monorepo that contains a full-stack dApp. It features a frontend for viewing NFTs and a backend to manage the smart contract logic and asset deployment.

## Key Features

-   **Frontend (Vue.js):** A modern, responsive user interface built with Vue 3 and Vite.
    -   **NFT Gallery:** A component to display a collection of NFTs.
    -   **Login Page:** A dedicated page for user authentication.
    -   **3D Viewer:** A `BabylonScene.vue` component for immersive 3D visualization of NFTs.
    -   **Styling:** Uses Tailwind CSS for efficient and customizable design.

-   **Hardhat Project (Backend):** The backend for smart contract development and a Node.js server.
    -   **Smart Contracts:** `AdminNFT.sol` and `Lock.sol` for managing NFT logic.
    -   **Secure Contracts:** Uses the OpenZeppelin library for secure and battle-tested smart contract functionality.
    -   **Node.js Server:** An Express.js backend with `cors`, `multer`, and `axios` to handle file uploads and API interactions.
    -   **Deployment Script:** A script to deploy the `AdminNFT` contract to the blockchain.

---

## Getting Started

To get the project up and running, follow these steps. This project uses `npm workspaces`, so all commands should be run from the root directory.

### Prerequisites

You need to have **Node.js** and **npm** installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/harshwar/Project.git](https://github.com/harshwar/Project.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Project
    ```
3.  **Install all dependencies:**
    This single command will install all dependencies for both the frontend and the Hardhat backend.
    ```bash
    npm install
    ```

---

## Running the Project

### Start the Frontend

To launch the development server for the NFT viewer, run the `dev` script.

```bash
npm run dev
```
Project
├─ Frontend
│  └─ nft-viewer
│     ├─ .editorconfig
│     ├─ .prettierrc.json
│     ├─ README.md
│     ├─ eslint.config.js
│     ├─ index.html
│     ├─ package.json
│     ├─ postcss.config.js
│     ├─ public
│     │  └─ favicon.ico
│     ├─ src
│     │  ├─ App.vue
│     │  ├─ assets
│     │  │  ├─ base.css
│     │  │  ├─ logo.svg
│     │  │  ├─ main.css
│     │  │  └─ tailwind.css
│     │  ├─ components
│     │  │  ├─ BabylonScene.vue
│     │  │  ├─ LoginPage.vue
│     │  │  ├─ NFTGallery.vue
│     │  │  └─ icons
│     │  │     ├─ IconCommunity.vue
│     │  │     ├─ IconDocumentation.vue
│     │  │     ├─ IconEcosystem.vue
│     │  │     ├─ IconSupport.vue
│     │  │     └─ IconTooling.vue
│     │  ├─ config.js
│     │  ├─ main.js
│     │  └─ router.js
│     ├─ tailwind.config.js
│     └─ vite.config.js
├─ README.md
├─ my-hardhat-project
│  ├─ README.md
│  ├─ abi.js
│  ├─ contracts
│  │  ├─ AdminNFT.sol
│  │  ├─ AdminNFT.sol:23:46:
│  │  ├─ Lock.sol
│  │  └─ openzeppelin
│  │     ├─ README.md
│  │     ├─ access
│  │     │  ├─ AccessControl.sol
│  │     │  ├─ IAccessControl.sol
│  │     │  ├─ Ownable.sol
│  │     │  ├─ Ownable2Step.sol
│  │     │  ├─ extensions
│  │     │  │  ├─ AccessControlDefaultAdminRules.sol
│  │     │  │  ├─ AccessControlEnumerable.sol
│  │     │  │  ├─ IAccessControlDefaultAdminRules.sol
│  │     │  │  └─ IAccessControlEnumerable.sol
│  │     │  └─ manager
│  │     │     ├─ AccessManaged.sol
│  │     │     ├─ AccessManager.sol
│  │     │     ├─ AuthorityUtils.sol
│  │     │     ├─ IAccessManaged.sol
│  │     │     ├─ IAccessManager.sol
│  │     │     └─ IAuthority.sol
│  │     ├─ account
│  │     │  ├─ Account.sol
│  │     │  ├─ extensions
│  │     │  │  ├─ draft-AccountERC7579.sol
│  │     │  │  ├─ draft-AccountERC7579Hooked.sol
│  │     │  │  └─ draft-ERC7821.sol
│  │     │  └─ utils
│  │     │     ├─ EIP7702Utils.sol
│  │     │     ├─ draft-ERC4337Utils.sol
│  │     │     └─ draft-ERC7579Utils.sol
│  │     ├─ finance
│  │     │  ├─ VestingWallet.sol
│  │     │  └─ VestingWalletCliff.sol
│  │     ├─ governance
│  │     │  ├─ Governor.sol
│  │     │  ├─ IGovernor.sol
│  │     │  ├─ TimelockController.sol
│  │     │  ├─ extensions
│  │     │  │  ├─ GovernorCountingFractional.sol
│  │     │  │  ├─ GovernorCountingOverridable.sol
│  │     │  │  ├─ GovernorCountingSimple.sol
│  │     │  │  ├─ GovernorNoncesKeyed.sol
│  │     │  │  ├─ GovernorPreventLateQuorum.sol
│  │     │  │  ├─ GovernorProposalGuardian.sol
│  │     │  │  ├─ GovernorSequentialProposalId.sol
│  │     │  │  ├─ GovernorSettings.sol
│  │     │  │  ├─ GovernorStorage.sol
│  │     │  │  ├─ GovernorSuperQuorum.sol
│  │     │  │  ├─ GovernorTimelockAccess.sol
│  │     │  │  ├─ GovernorTimelockCompound.sol
│  │     │  │  ├─ GovernorTimelockControl.sol
│  │     │  │  ├─ GovernorVotes.sol
│  │     │  │  ├─ GovernorVotesQuorumFraction.sol
│  │     │  │  └─ GovernorVotesSuperQuorumFraction.sol
│  │     │  └─ utils
│  │     │     ├─ IVotes.sol
│  │     │     ├─ Votes.sol
│  │     │     └─ VotesExtended.sol
│  │     ├─ interfaces
│  │     │  ├─ IERC1155.sol
│  │     │  ├─ IERC1155MetadataURI.sol
│  │     │  ├─ IERC1155Receiver.sol
│  │     │  ├─ IERC1271.sol
│  │     │  ├─ IERC1363.sol
│  │     │  ├─ IERC1363Receiver.sol
│  │     │  ├─ IERC1363Spender.sol
│  │     │  ├─ IERC165.sol
│  │     │  ├─ IERC1820Implementer.sol
│  │     │  ├─ IERC1820Registry.sol
│  │     │  ├─ IERC1967.sol
│  │     │  ├─ IERC20.sol
│  │     │  ├─ IERC20Metadata.sol
│  │     │  ├─ IERC2309.sol
│  │     │  ├─ IERC2612.sol
│  │     │  ├─ IERC2981.sol
│  │     │  ├─ IERC3156.sol
│  │     │  ├─ IERC3156FlashBorrower.sol
│  │     │  ├─ IERC3156FlashLender.sol
│  │     │  ├─ IERC4626.sol
│  │     │  ├─ IERC4906.sol
│  │     │  ├─ IERC5267.sol
│  │     │  ├─ IERC5313.sol
│  │     │  ├─ IERC5805.sol
│  │     │  ├─ IERC6372.sol
│  │     │  ├─ IERC721.sol
│  │     │  ├─ IERC721Enumerable.sol
│  │     │  ├─ IERC721Metadata.sol
│  │     │  ├─ IERC721Receiver.sol
│  │     │  ├─ IERC777.sol
│  │     │  ├─ IERC777Recipient.sol
│  │     │  ├─ IERC777Sender.sol
│  │     │  ├─ IERC7913.sol
│  │     │  ├─ draft-IERC1822.sol
│  │     │  ├─ draft-IERC4337.sol
│  │     │  ├─ draft-IERC6093.sol
│  │     │  ├─ draft-IERC6909.sol
│  │     │  ├─ draft-IERC7579.sol
│  │     │  ├─ draft-IERC7674.sol
│  │     │  ├─ draft-IERC7802.sol
│  │     │  └─ draft-IERC7821.sol
│  │     ├─ metatx
│  │     │  ├─ ERC2771Context.sol
│  │     │  └─ ERC2771Forwarder.sol
│  │     ├─ package.json
│  │     ├─ proxy
│  │     │  ├─ Clones.sol
│  │     │  ├─ ERC1967
│  │     │  │  ├─ ERC1967Proxy.sol
│  │     │  │  └─ ERC1967Utils.sol
│  │     │  ├─ Proxy.sol
│  │     │  ├─ beacon
│  │     │  │  ├─ BeaconProxy.sol
│  │     │  │  ├─ IBeacon.sol
│  │     │  │  └─ UpgradeableBeacon.sol
│  │     │  ├─ transparent
│  │     │  │  ├─ ProxyAdmin.sol
│  │     │  │  └─ TransparentUpgradeableProxy.sol
│  │     │  └─ utils
│  │     │     ├─ Initializable.sol
│  │     │     └─ UUPSUpgradeable.sol
│  │     ├─ token
│  │     │  ├─ ERC1155
│  │     │  │  ├─ ERC1155.sol
│  │     │  │  ├─ IERC1155.sol
│  │     │  │  ├─ IERC1155Receiver.sol
│  │     │  │  ├─ extensions
│  │     │  │  │  ├─ ERC1155Burnable.sol
│  │     │  │  │  ├─ ERC1155Pausable.sol
│  │     │  │  │  ├─ ERC1155Supply.sol
│  │     │  │  │  ├─ ERC1155URIStorage.sol
│  │     │  │  │  └─ IERC1155MetadataURI.sol
│  │     │  │  └─ utils
│  │     │  │     ├─ ERC1155Holder.sol
│  │     │  │     └─ ERC1155Utils.sol
│  │     │  ├─ ERC20
│  │     │  │  ├─ ERC20.sol
│  │     │  │  ├─ IERC20.sol
│  │     │  │  ├─ extensions
│  │     │  │  │  ├─ ERC1363.sol
│  │     │  │  │  ├─ ERC20Burnable.sol
│  │     │  │  │  ├─ ERC20Capped.sol
│  │     │  │  │  ├─ ERC20FlashMint.sol
│  │     │  │  │  ├─ ERC20Pausable.sol
│  │     │  │  │  ├─ ERC20Permit.sol
│  │     │  │  │  ├─ ERC20Votes.sol
│  │     │  │  │  ├─ ERC20Wrapper.sol
│  │     │  │  │  ├─ ERC4626.sol
│  │     │  │  │  ├─ IERC20Metadata.sol
│  │     │  │  │  ├─ IERC20Permit.sol
│  │     │  │  │  ├─ draft-ERC20Bridgeable.sol
│  │     │  │  │  └─ draft-ERC20TemporaryApproval.sol
│  │     │  │  └─ utils
│  │     │  │     ├─ ERC1363Utils.sol
│  │     │  │     └─ SafeERC20.sol
│  │     │  ├─ ERC6909
│  │     │  │  ├─ draft-ERC6909.sol
│  │     │  │  └─ extensions
│  │     │  │     ├─ draft-ERC6909ContentURI.sol
│  │     │  │     ├─ draft-ERC6909Metadata.sol
│  │     │  │     └─ draft-ERC6909TokenSupply.sol
│  │     │  ├─ ERC721
│  │     │  │  ├─ ERC721.sol
│  │     │  │  ├─ IERC721.sol
│  │     │  │  ├─ IERC721Receiver.sol
│  │     │  │  ├─ extensions
│  │     │  │  │  ├─ ERC721Burnable.sol
│  │     │  │  │  ├─ ERC721Consecutive.sol
│  │     │  │  │  ├─ ERC721Enumerable.sol
│  │     │  │  │  ├─ ERC721Pausable.sol
│  │     │  │  │  ├─ ERC721Royalty.sol
│  │     │  │  │  ├─ ERC721URIStorage.sol
│  │     │  │  │  ├─ ERC721URIStorage.sol:15:1:
│  │     │  │  │  ├─ ERC721Votes.sol
│  │     │  │  │  ├─ ERC721Wrapper.sol
│  │     │  │  │  ├─ IERC721Enumerable.sol
│  │     │  │  │  └─ IERC721Metadata.sol
│  │     │  │  └─ utils
│  │     │  │     ├─ ERC721Holder.sol
│  │     │  │     └─ ERC721Utils.sol
│  │     │  └─ common
│  │     │     └─ ERC2981.sol
│  │     ├─ utils
│  │     │  ├─ Address.sol
│  │     │  ├─ Arrays.sol
│  │     │  ├─ Base64.sol
│  │     │  ├─ Blockhash.sol
│  │     │  ├─ Bytes.sol
│  │     │  ├─ CAIP10.sol
│  │     │  ├─ CAIP2.sol
│  │     │  ├─ Calldata.sol
│  │     │  ├─ Comparators.sol
│  │     │  ├─ Context.sol
│  │     │  ├─ Counters.sol
│  │     │  ├─ Create2.sol
│  │     │  ├─ Errors.sol
│  │     │  ├─ Multicall.sol
│  │     │  ├─ Nonces.sol
│  │     │  ├─ NoncesKeyed.sol
│  │     │  ├─ Packing.sol
│  │     │  ├─ Panic.sol
│  │     │  ├─ Pausable.sol
│  │     │  ├─ ReentrancyGuard.sol
│  │     │  ├─ ReentrancyGuardTransient.sol
│  │     │  ├─ ShortStrings.sol
│  │     │  ├─ SlotDerivation.sol
│  │     │  ├─ StorageSlot.sol
│  │     │  ├─ Strings.sol
│  │     │  ├─ TransientSlot.sol
│  │     │  ├─ TransientSlot.sol:108:13:
│  │     │  ├─ cryptography
│  │     │  │  ├─ ECDSA.sol
│  │     │  │  ├─ EIP712.sol
│  │     │  │  ├─ Hashes.sol
│  │     │  │  ├─ MerkleProof.sol
│  │     │  │  ├─ MessageHashUtils.sol
│  │     │  │  ├─ P256.sol
│  │     │  │  ├─ RSA.sol
│  │     │  │  ├─ SignatureChecker.sol
│  │     │  │  ├─ draft-ERC7739Utils.sol
│  │     │  │  ├─ signers
│  │     │  │  │  ├─ AbstractSigner.sol
│  │     │  │  │  ├─ MultiSignerERC7913.sol
│  │     │  │  │  ├─ MultiSignerERC7913Weighted.sol
│  │     │  │  │  ├─ SignerECDSA.sol
│  │     │  │  │  ├─ SignerERC7702.sol
│  │     │  │  │  ├─ SignerERC7913.sol
│  │     │  │  │  ├─ SignerP256.sol
│  │     │  │  │  ├─ SignerRSA.sol
│  │     │  │  │  └─ draft-ERC7739.sol
│  │     │  │  └─ verifiers
│  │     │  │     ├─ ERC7913P256Verifier.sol
│  │     │  │     └─ ERC7913RSAVerifier.sol
│  │     │  ├─ introspection
│  │     │  │  ├─ ERC165.sol
│  │     │  │  ├─ ERC165Checker.sol
│  │     │  │  └─ IERC165.sol
│  │     │  ├─ math
│  │     │  │  ├─ Math.sol
│  │     │  │  ├─ SafeCast.sol
│  │     │  │  └─ SignedMath.sol
│  │     │  ├─ structs
│  │     │  │  ├─ BitMaps.sol
│  │     │  │  ├─ Checkpoints.sol
│  │     │  │  ├─ CircularBuffer.sol
│  │     │  │  ├─ DoubleEndedQueue.sol
│  │     │  │  ├─ EnumerableMap.sol
│  │     │  │  ├─ EnumerableSet.sol
│  │     │  │  ├─ Heap.sol
│  │     │  │  └─ MerkleTree.sol
│  │     │  └─ types
│  │     │     └─ Time.sol
│  │     └─ vendor
│  │        └─ compound
│  │           └─ ICompoundTimelock.sol
│  ├─ ethers.umd.min.js
│  ├─ hardhat.config.js
│  ├─ ignition
│  │  └─ modules
│  │     └─ Lock.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ scripts
│  │  └─ deploy-nft.js
│  ├─ server.js
│  ├─ test
│  │  └─ Lock.js
│  └─ uploads
├─ package-lock.json
└─ package.json

```