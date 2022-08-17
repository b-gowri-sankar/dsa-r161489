
// You have n coins and you want to build
//  a staircase with these coins. The staircase consists of k
//   rows where the ith row has exactly i coins. The last row
//    of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of
//  the staircase you will build.
//LINK: https://leetcode.com/problems/arranging-coins/
 

var arrangeCoins = function(n) {
    let i = 1;
    let j = 1;
    let l = 1;
    let noOfCompletedStairs = 0
    while(i <= n && j <= n){
        noOfCompletedStairs++;
        i = j+1;
        j = i + l
        l++
    }
    return noOfCompletedStairs
};

//Space Complexity: O(1);
//time Complexity: O(log n)