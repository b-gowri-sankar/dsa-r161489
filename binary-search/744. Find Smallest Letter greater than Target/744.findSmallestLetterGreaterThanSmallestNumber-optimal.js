// Given a characters array letters that is sorted in 
// non-decreasing order and a character target, 
// return the smallest character in the array 
// that is larger than target.

// Note that the letters wrap around.

// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
//LINK: https://leetcode.com/problems/find-smallest-letter-greater-than-target/
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    while(left <= right){
        let mid= Math.floor((left+right)/2);
        if(letters[mid] <= target){
            left =mid + 1;
        } else {
            right = mid - 1
        }
    }
    if(left === letters.length){
        return letters[0]
    }
    return letters[left]
};

//Time complexity: O(log n)
//Space Complexity: O(1)