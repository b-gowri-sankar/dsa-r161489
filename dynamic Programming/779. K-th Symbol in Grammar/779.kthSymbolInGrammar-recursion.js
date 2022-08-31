var kthGrammar = function(n, k) {
    if(n<=1){
        return 0;
    }
    let value = 2**(n-2);
    if(value >= k){
        return kthGrammar(n-1, k)
    } else{
        let zeroOrOne = kthGrammar(n-1, k-value)
        if(zeroOrOne === 0){
            return 1
        } else {
            return 0
        }
    }
};