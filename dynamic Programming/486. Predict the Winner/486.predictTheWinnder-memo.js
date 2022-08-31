/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var PredictTheWinner = function(nums) {
    let memo = nums.map(num => nums.map(n => -1))
    let totalSum = nums.reduce((a,b) => a+b, 0)
    let bestSum = solve(nums, 0, nums.length-1, memo)
    if(bestSum >= totalSum-bestSum){
        return true
    }
     return false
};

function solve(nums, i, j, memo) {
    if(j < i){
        return 0;
    }
    if(i === j){
        return nums[i]
    }
    if(memo[i][j] !== -1){
        return memo[i][j]
    }
    let selectLeftValue = nums[i] + Math.min(solve(nums, i+2, j, memo), solve(nums, i+1, j-1, memo));
    let selectRightValue = nums[j] + Math.min(solve(nums, i+1, j-1, memo), solve(nums, i, j-2, memo));
    memo[i][j] = Math.max(selectLeftValue, selectRightValue)
    return memo[i][j]
}