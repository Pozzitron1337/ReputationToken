const hre = require("hardhat");
const BN = hre.ethers.BigNumber;

const toBN = (num) => BN.from(num);

module.exports = {
   
    deploymentReputationToken : async function () {
        let signers = await hre.ethers.getSigners()
        let deployer = signers[0]
        let deployerAddress = deployer.address
        console.log("\n***** ReputationToken DEPLOYMENT *****")
        console.log("Deployer address: " + deployerAddress)

        const ReputationToken = await hre.ethers.getContractFactory("ReputationToken");
        let reputationTokenAddress

        let reputationToken = await ReputationToken.connect(deployer).deploy()
        await reputationToken.deployed().then(function(instance){
            console.log("\nTransaction hash: " + instance.deployTransaction.hash)
            console.log("ReputationToken address: " + instance.address)
        });
        reputationTokenAddress = reputationToken.address

        return reputationTokenAddress
    }
} 