const hre = require("hardhat");
const BN = hre.ethers.BigNumber;

const toBN = (num) => BN.from(num);

module.exports = {
   
    deploymentReputationRouter : async function () {
        let signers = await hre.ethers.getSigners()
        let deployer = signers[0]
        let deployerAddress = deployer.address
        console.log("\n***** ReputationRouter DEPLOYMENT *****")
        console.log("Deployer address: " + deployerAddress)

        const ReputationRouter = await hre.ethers.getContractFactory("ReputationRouter");
        let reputationRouterAddress

        let reputationRouter = await ReputationRouter.connect(deployer).deploy()
        await reputationRouter.deployed().then(function(instance){
            console.log("\nTransaction hash: " + instance.deployTransaction.hash)
            console.log("ReputationRouter address: " + instance.address)
        });
        reputationRouterAddress = reputationRouter.address

        return reputationRouterAddress
    }
} 