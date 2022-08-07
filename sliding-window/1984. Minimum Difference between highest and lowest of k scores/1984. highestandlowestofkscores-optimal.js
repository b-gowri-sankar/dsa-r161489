/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//  You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student.
//   You are also given an integer k.

//  Pick the scores of any k students from the array so that the difference between the highest
// and the lowest of the k scores is minimized.
 
//  Return the minimum possible difference.
// Link: https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 var minimumDifference = function(nums, k) {
    nums.sort((a,b) => a -b)
    let i=0;
    let j=0;
    let min=Infinity;
    while(j < nums.length){
        if(j-i+1 < k){
            j++;
            continue;
        }
        min = Math.min(nums[j] - nums[i], min)
        i++;
        j++
    }
    return min
};

//time complexity: O(nlogn) //sorting the array. best way to sort the array is using nlogn time complexity which is greater than O(n)
//space complexity: O(k)