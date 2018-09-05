import web3 from '../node_modules/web3/dist/web3.min.js';
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http: //localhost:8545"));
}