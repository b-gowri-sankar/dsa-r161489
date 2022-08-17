// Given a positive integer num, write
//  a function which returns True if num is a perfect square else False.
//LINK: https://leetcode.com/problems/valid-perfect-square/
var isPerfectSquare = function(num) {
    let start = 1
    let end = num
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(mid*mid === num){
            return true;
        }
        else if(mid*mid < num){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false
};

//Time Complexity: O(log n) where n is num;
//Space Complexity: O(1)