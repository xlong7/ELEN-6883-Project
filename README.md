# ELEN-6883-Project

To run project, please do:

1. npm install -g truffle

2. Please change the secret key in secrets.json to your own secret key

0xB2622966b9b9B827aC67a7e8e701ee00077490E4.json

# Check the smart contract in localhost
1. cd frontend

2. npm install

3. npm run dev

# Interact with the smart contract in networks
1. truffle deploy --network <networkname>
  
2. truffle console --network <networkname>
  
3. You can use command in truffle_console_sh.js to check if the deployment is successful.
  
  
# Deployment on CCN network like Huygens and Huygens_dev
See tutorial on: https://www.youtube.com/watch?v=FfQWVQy5kzg
  
And https://computecoin-network.gitbook.io/computecoin/for-developers/smart-contract-developers/web3-compatibility  
  
You need to use postman tool to import and unlock your wallet account (self create two requsts files and edit them as the tutorial), and export your ale wallet to export a 'YourPublicKey.json' file and use it like the tutorial said.
