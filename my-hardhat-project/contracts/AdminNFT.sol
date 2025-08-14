// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./openzeppelin/token/ERC721/ERC721.sol";
import "./openzeppelin/token/ERC721/extensions/ERC721URIStorage.sol";
import "./openzeppelin/access/Ownable.sol";
import "./openzeppelin/utils/Counters.sol";

contract AdminNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("AdminNFT", "ADMNFT") Ownable(msg.sender) {}

    function safeMint(address to, string memory _tokenURI) public onlyOwner {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, _tokenURI);
    }

    // Add this tokenURI function to resolve the conflict
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}