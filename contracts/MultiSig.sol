pragma solidity ^0.4.0;


contract MultiSignature {
    uint public nonce;
    uint public threshold;
    
    mapping(address => bool) isOwner;
    address[] public ownerArr;
    
    function MultiSignature(uint threshold_, address[] ownerList){
          uint amountOfOwners = ownerList.length;
        if (amountOfOwners > 10 || threshold_ > amountOfOwners || threshold_ == 0) { 
            throw;
        }
        
        for (uint owner = 0; owner < amountOfOwners ; owner++) {
            isOwner[ownerList[owner]] = true;
        }
        
        ownerArr = ownerList;
        threshold = threshold_;
        
    }
    
    function execute(uint8[] sigV, bytes32[] sigR, bytes32[] sigS, address destination, uint value, bytes data) {
        if(sigR.length != threshold) { throw ; }
        if(sigR.length != sigS.length || sigR.length != sigV.length) { throw; }
        
        bytes32 txHash = sha3(byte(0x19), byte(0), this, destination, value, data, nonce);
        address lastAdd = address(0); // cannot have address(0) as an owner
    
        for (uint i = 0; i < threshold; i++) {
            address recovered = ecrecover(txHash, sigV[i], sigR[i], sigS[i]);
            if (recovered <= lastAdd || !isOwner[recovered]) throw;
            lastAdd = recovered;
        }

        // If we make it here all signatures are accounted for
        nonce = nonce + 1;
        if (!destination.call.value(value)(data)) {throw;}
    }

  function () payable {}
}