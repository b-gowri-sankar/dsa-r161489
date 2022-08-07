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
    let subStr = ""
    while(j < stringNum.length){
        if(j-i+1 < k){
            subStr += stringNum[j]
            j++;
            continue;
        }
        subStr += stringNum[j]
        if(isKBeauty(num, parseInt(subStr))){
            count++
        }
        i++;
        j++;
        subStr = subStr.slice(1)
    }
    return count
};

function isKBeauty(num, subNum){
    if(subNum !== 0 && num %subNum === 0){
        return true
    }
    return false
}


//Time complexity: O(n*k) due to slice
// space complexity:O(k)