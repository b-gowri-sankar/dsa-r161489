// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated,
//  and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function
//  or operator, such as pow(x, 0.5) or x ** 0.5.
//LINK: https://leetcode.com/problems/sqrtx/
 

var mySqrt = function(x) {
    if(x === 0){
        return 0
    }
    let start = 0;
    let end = x-1;
    let result = -Infinity
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        let midValue = (mid+1)*(mid + 1);
        if(midValue === x){
            return mid+1;
        }else if(midValue > x){
            end = mid - 1;
        } else {
            result = Math.max(result, mid);
            start = mid + 1;
        }
    }
    return result+1
};

//Time complexity: O(log n)
//Space Complexity: O(1)