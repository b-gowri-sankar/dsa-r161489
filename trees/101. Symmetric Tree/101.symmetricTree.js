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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    return helper(root?.left, root?.right)
};

function helper(leftTree, rightTree)  {
    if(leftTree == null || rightTree === null){
        if(rightTree){
            return false
        }
        if(leftTree){
            return false
        }
        return true
    }
    let isRootNodesEqual = leftTree.val === rightTree.val
    return isRootNodesEqual && helper(leftTree?.left ?? null, rightTree?.right ?? null) && helper(leftTree?.right ?? null, rightTree?.left ?? null)
}