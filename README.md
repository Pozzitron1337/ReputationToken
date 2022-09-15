# Reputation Token 

Provide verified Indicators of Comprometation and earn reputation.

Deployment:
1. Deploy ReputationToken
2. Deploy ReputationLock
3. Deploy IoCStorage
4. Deploy ReputationRouter
5. Transact initialize on ReputationRouter with corresponded params

To run deployment script type:
```
npx hardhat run scripts/deployment/System/deploySystem.js --network <PREFERED_NETWORK>
```