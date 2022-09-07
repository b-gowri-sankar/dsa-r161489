var sortedArrayToBST = function(nums) {
    return helper(nums, 0, nums.length-1)
};

function helper(nums, i, j){
    if(j < i){
        return null
    }
    let midValue = Math.floor((i+j)/2)
    let leftSubTreeRootNode = helper(nums, i, midValue-1)
    let rightSubTreeRootNode = helper(nums, midValue+1, j)
    let rootNode = new TreeNode(nums[midValue], leftSubTreeRootNode, rightSubTreeRootNode)
    return rootNode
}