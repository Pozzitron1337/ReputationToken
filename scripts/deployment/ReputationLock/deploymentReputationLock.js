const hre = require("hardhat");
const BN = hre.ethers.BigNumber;

const toBN = (num) => BN.from(num);

module.exports = {
   
    deploymentReputationLock : async function () {
        let signers = await hre.ethers.getSigners()
        let deployer = signers[0]
        let deployerAddress = deployer.address
        console.log("\n***** ReputationLock DEPLOYMENT *****")
        console.log("Deployer address: " + deployerAddress)

        const ReputationLock = await hre.ethers.getContractFactory("ReputationLock");
        let reputationLockAddress

        let reputationLock = await ReputationLock.connect(deployer).deploy()
        await reputationLock.deployed().then(function(instance){
            console.log("\nTransaction hash: " + instance.deployTransaction.hash)
            console.log("ReputationLock address: " + instance.address)
        });
        reputationLockAddress = reputationLock.address

        return reputationLockAddress
    }
} 