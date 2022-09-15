const hre = require("hardhat");
const BN = hre.ethers.BigNumber;

const toBN = (num) => BN.from(num);

module.exports = {
   
    deploymentIoC : async function () {
        let signers = await hre.ethers.getSigners()
        let deployer = signers[0]
        let deployerAddress = deployer.address
        console.log("\n***** IoC DEPLOYMENT *****")
        console.log("Deployer address: " + deployerAddress)

        const IoC = await hre.ethers.getContractFactory("IoC");
        let iocAddress

        let ioc = await IoC.connect(deployer).deploy()
        await ioc.deployed().then(function(instance){
            console.log("\nTransaction hash: " + instance.deployTransaction.hash)
            console.log("IoC address: " + instance.address)
        });
        iocAddress = ioc.address

        return iocAddress
    }
} 