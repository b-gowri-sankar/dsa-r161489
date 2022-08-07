// The k-beauty of an integer num is defined as the number of substrings of num 
// when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
 var divisorSubstrings = function(num, k) {
    let i=0;
    let j=0;
    let count = 0;
    let stringNum = String(num)
    while(j < stringNum.length){
        if(j-i+1 < k){
            j++;
            continue;
        }
        let subString = stringNum.slice(i, j+1);
        if(isKBeauty(num, parseInt(subString))){
            count++
        }
        i++;
        j++;
    }
    return count
};

function isKBeauty(num, subNum){
    if(subNum !== 0 && num %subNum === 0){
        return true
    }
    return false
}

//Time complexity: O(n*n) due to slice
// space complexity:O(k)