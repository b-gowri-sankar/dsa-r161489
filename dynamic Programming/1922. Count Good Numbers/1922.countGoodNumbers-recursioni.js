/**
 * @param {number} n
 * @return {number}
 */
 var countGoodNumbers = function(n) {
    var mod = 1000000007n;
    let value = 0;
    if(n <= 1){
        return 5 
    }
    if(n%2 === 0){
        let evenValues = myPow(5, n/2)
        let primeValues = myPow(4, n/2)
        value = evenValues * primeValues
        return value%mod
    }
    let evenPowerValue = Math.ceil(n/2);
    let primePowerValue = Math.floor(n/2);
    let evenValues = myPow(5, evenPowerValue)
    let primeValues = myPow(4, primePowerValue)
    value = evenValues * primeValues
    return value%mod
};

var mod = 1000000007n;

 function myPow(x,y)
    {
        if(y===0)
        {
            return 1n;
        }
        var res = 1n;
        res *= myPow(x, Math.floor(y/2));
        res *= res;
        if(y%2===1)
        {
            res *= BigInt(x);
        }
        res %= mod;
        return res;
    }
