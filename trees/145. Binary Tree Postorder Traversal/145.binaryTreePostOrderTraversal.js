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
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let nodeData = [];
    helper(root, nodeData)
    return nodeData
};
var helper = function(root, nodes)  {
    if(root === null){
        return;
    }
    helper(root.left, nodes)
    helper(root.right, nodes)
    nodes.push(root.val)
    return
}