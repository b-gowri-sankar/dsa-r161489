/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
    return sumOfLeftLeavesHelper(root, false)
};

function sumOfLeftLeavesHelper(root, isLeft){
    if(!root){
        return 0
    }
    if(!root.left && !root.right && isLeft){
        return root?.val
    }
    let leftSum = sumOfLeftLeavesHelper(root.left, true)
    let rightSum = sumOfLeftLeavesHelper(root.right, false)
    return leftSum+rightSum
}