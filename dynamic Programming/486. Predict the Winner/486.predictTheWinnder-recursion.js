/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var PredictTheWinner = function(nums) {
    let totalSum = nums.reduce((a,b) => a+b, 0)
    let bestSum = solve(nums, 0, nums.length-1)
    if(bestSum >= totalSum-bestSum){
        return true
    }
     return false
};

function solve(nums, i, j) {
    if(j < i){
        return 0;
    }
    if(i === j){
        return nums[i]
    }
    let selectLeftValue = nums[i] + Math.min(solve(nums, i+2, j), solve(nums, i+1, j-1));
    let selectRightValue = nums[j] + Math.min(solve(nums, i+1, j-1), solve(nums, i, j-2));
    return Math.max(selectLeftValue, selectRightValue)
}