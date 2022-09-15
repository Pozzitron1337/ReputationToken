const hre = require("hardhat");
const BN = hre.ethers.BigNumber;

const toBN = (num) => BN.from(num);

module.exports = {
   
    deploymentIoCStorage : async function () {
        let signers = await hre.ethers.getSigners()
        let deployer = signers[0]
        let deployerAddress = deployer.address
        console.log("\n***** IoCStorage DEPLOYMENT *****")
        console.log("Deployer address: " + deployerAddress)

        const IoCStorage = await hre.ethers.getContractFactory("IoCStorage");
        let iocStorageAddress

        let iocStorage = await IoCStorage.connect(deployer).deploy()
        await iocStorage.deployed().then(function(instance){
            console.log("\nTransaction hash: " + instance.deployTransaction.hash)
            console.log("IoCStorage address: " + instance.address)
        });
        iocStorageAddress = iocStorage.address

        return iocStorageAddress
    }
} 