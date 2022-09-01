var findKthBit = function(n, k) {
    if(n === 1){
        return "0"
    }
    let nStringLength = (2**(n-1)) +( 2**(n-1)) - 1;
    let middleValue = Math.ceil(nStringLength/2)
    if(middleValue === k){
        return "1"
    }
    if(k < middleValue){
        return findKthBit(n-1, k)
    } 
    let value = findKthBit(n-1, nStringLength-k+1)
    if(value === "0"){
        return "1"
    } else {
        return "0"
    }
};