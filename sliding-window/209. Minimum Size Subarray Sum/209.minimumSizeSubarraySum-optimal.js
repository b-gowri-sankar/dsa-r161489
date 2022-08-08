// Given an array of positive integers nums and a positive integer target, 
// return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] 
// of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let min = Infinity;
    while(right<nums.length){
        sum = sum+nums[right]
        if(sum >= target){
            min = Math.min(right - left + 1, min)
            sum = sum - nums[left] - nums[right]
            left++;
            continue;
        }
        right++;
    }
    return min !== Infinity ? min : 0
};

//Time complexity: O(n)
//Space Complexity: O(1)