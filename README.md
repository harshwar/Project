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