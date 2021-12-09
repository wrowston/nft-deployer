const hre = require("hardhat");

const WALLET_ADDRESS = "0xF97840Ebf25131112Ffb9D80621C1f69178DEDef"
const CONTRACT_ADDRESS = "0x150DdfB3e72EC118D8cc27b00887Fed9634c3B1c"

async function main(_URI) {
    const NFT = await hre.ethers.getContractFactory("Veeval");
    const URI = "ipfs://QmSAZuN2vA7dNdLZBp6LQuZcP3r6ZjbibgR2Zsc3jmi2SE"

    const contract = NFT.attach(CONTRACT_ADDRESS);
    await contract.mint(WALLET_ADDRESS, URI);
    console.log("NFT minted:", contract);


}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
  });