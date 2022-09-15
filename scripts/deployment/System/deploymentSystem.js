const hre = require("hardhat");
const BN = hre.ethers.BigNumber;

const toBN = (num) => BN.from(num);

module.exports = {
   
    deploymentSystem : async function () {
        const ReputationToken = await hre.ethers.getContractFactory("ReputationToken");
        const ReputationLock = await hre.ethers.getContractFactory("ReputationLock");
        const IoCStorage = await hre.ethers.getContractFactory("IoCStorage");
        const IoC = await hre.ethers.getContractFactory("IoC");
        const ReputationRouter = await hre.ethers.getContractFactory("ReputationRouter");
    
        let signers = await hre.ethers.getSigners()
        let shareholder = signers[0]
        let shareholderAddress = shareholder.address
        console.log("Shareholder address: " + shareholderAddress)

        let reputationTokenAddress_
        let reputationLockAddress_
        let iocStorageAddress_
        let iocAddress_
        let reputationRouterAddress_
        let totalSupplyCap_ = toBN(10_000_000_000).mul(toBN(10).pow(toBN(18))) 
    
        const { deploymentReputationToken } = require("../ReputationToken/deploymentReputationToken.js")
        reputationTokenAddress_ = await deploymentReputationToken()
    
        const { deploymentReputationLock } = require("../ReputationLock/deploymentReputationLock.js")
        reputationLockAddress_ = await deploymentReputationLock()
    
        const { deploymentIoCStorage } = require("../IoCStorage/deploymentIoCStorage.js")
        iocStorageAddress_ = await deploymentIoCStorage()
    
        const { deploymentIoC } = require("../IoC/deploymentIoC.js")
        iocAddress_ = await deploymentIoC()
    
        const { deploymentReputationRouter } = require("../ReputationRouter/deploymentReputationRouter.js")
        reputationRouterAddress_ = await deploymentReputationRouter()
        
        let reputationRouter = await ReputationRouter.connect(shareholder).attach(reputationRouterAddress_)

        await reputationRouter.initialize(
            reputationTokenAddress_,
            reputationLockAddress_,
            iocStorageAddress_,
            iocAddress_,
            totalSupplyCap_
        ).then(function(instance){
            console.log("\nTransaction hash: " + instance.hash);
            console.log("ReputationRouter call initialize with params:");
            console.log("   reputationToken_: " + reputationTokenAddress_)
            console.log("   reputationLock_: " + reputationLockAddress_)
            console.log("   iocStorage_: " + iocStorageAddress_)
            console.log("   ioc_: " + iocAddress_)
            console.log("   totalSupplyCap_: " + totalSupplyCap_)
            return instance;
        });
    
        return {
            reputationTokenAddress : reputationTokenAddress_,
            reputationLockAddress : reputationLockAddress_,
            iocStorageAddress : iocStorageAddress_,
            iocAddress : iocAddress_,
            reputationRouterAddress : reputationRouterAddress_
        }
    }
} 