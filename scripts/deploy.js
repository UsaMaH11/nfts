//0x93b65D9FfF6B1846438fBF8b2e686EdB93d241E9

async function main() {
    const MyNFT =  await ethers.getContractFactory("MyNFT");

    const myNFT = await MyNFT.deploy();
    console.log('contract delployed to address', myNFT.address);
}

main()
.then(() =>process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1)
});