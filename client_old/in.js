
//import web3 from '../node_modules/web3/dist/web3.min.js';
const Web3 = require('web3');

// node: var Web3 = require('web3');
// var web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');
// For Meta-Mask and Mist
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // The test rpc provider
    web3 = new Web3(new Web3.providers.HttpProvider("http://0.0.0.0:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];
// ABI signature for the contract
var CoursesContract = web3.eth.contract([
{
"constant": false,
"inputs": [
    {
        "name": "_fName",
        "type": "string"
    },
    {
        "name": "_age",
        "type": "uint256"
    }
],
"name": "setInstructor",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "getInstructor",
"outputs": [
    {
        "name": "",
        "type": "string"
    },
    {
        "name": "",
        "type": "uint256"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
}
])
var Courses = CoursesContract.at('0xfe33b97ccddde42752572e8fa532e41a18c48440');
console.log(Courses)

$("#button").click(function() {
    Courses.setInstructor($("#name").val(), $("#age").val());
});

Courses.getInstructor(function(error, result){
    if(!error){
        $("#instructor").html(result[0]+' ('+result[1]+' years old)');
        console.log('result')
        console.log(result);
    }
    else {
        console.log('error')
        console.error(error);
    }
});