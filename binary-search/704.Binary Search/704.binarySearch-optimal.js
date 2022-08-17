// Given an array of integers nums which
// is sorted in ascending order, and an integer target,
// write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.
//LINK: https://leetcode.com/problems/binary-search/

var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(nums[mid] === target){
            return mid
        } else if(nums[mid] > target){
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
    return -1
};

//time complexity: O(log n)
//space complexity: O(1)