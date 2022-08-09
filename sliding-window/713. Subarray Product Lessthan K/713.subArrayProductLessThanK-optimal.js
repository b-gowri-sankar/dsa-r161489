// Given an array of integers nums and an integer k, return the
//  number of contiguous subarrays where the product of all
//   the elements in the subarray is strictly less than k.
//LINK: https://leetcode.com/problems/subarray-product-less-than-k/
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0
   let left = 0, right = 0, res = 0, product = 1;
    while(right < nums.length){
        product *= nums[right];
        while(product >= k){
            product/=nums[left]
            left++;
        }
        res = res + right - left + 1;
        right++
    }
    return res
};

//Time complexity: O(n)
//Space Complexity: O(1)