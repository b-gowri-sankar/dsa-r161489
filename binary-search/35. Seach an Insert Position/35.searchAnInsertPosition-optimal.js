// Given a sorted array of distinct integers and a target value,
//  return the index if the target is found. If not, return the index where
//   it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
//LINK: https://leetcode.com/problems/search-insert-position/
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let result = Infinity
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] === target){
            return mid
        }
        else if(nums[mid] > target){
            result = Math.min(result, mid);
            end = mid - 1;
        } else {
            start = mid+1;
        }
    }
    return result === Infinity ? nums.length : result
};

//Time complexity: O(log n) //the input size is going half, every time we iterate
//space Complexity: O(1)