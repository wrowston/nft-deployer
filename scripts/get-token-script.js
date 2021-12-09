const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("Veeval");
  const CONTRACT_ADDRESS = "0x150DdfB3e72EC118D8cc27b00887Fed9634c3B1c"

  const contract = NFT.attach(CONTRACT_ADDRESS);
  const owner = await contract.ownerOf(1);

  console.log("Owner:", owner);
  const uri = await contract.tokenURI(1);
  console.log("URI: ", uri);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});