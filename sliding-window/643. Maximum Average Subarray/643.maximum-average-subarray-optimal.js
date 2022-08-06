// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value 
// and return this value. Any answer with a calculation error less than 10-5 will be accepted.

var findMaxAverage = function(nums, k) {
    let maxSum = -Infinity;
    let i=0;
    let j=0;
    let sum = 0;
    while(j < nums.length) {
        if(j - i + 1 < k){
            sum = sum + nums[j];
            j++
        } else if(j-i+1 === k){
            sum +=nums[j];
            maxSum = Math.max(sum, maxSum)
            j++
        } else {
            sum -= nums[i]
            i++;
        }
        console.log(maxSum)
    }
    return maxSum/4
};

//Space Complexity: O(k)
//Time Complexity: O(n)