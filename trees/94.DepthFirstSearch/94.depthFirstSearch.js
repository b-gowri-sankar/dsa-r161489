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
 var inorderTraversal = function(root) {
    let nodeValues = [];
    depthFirstSearch(root,nodeValues)
    return nodeValues
};

function depthFirstSearch(root,nodeValues) {
    if(root === null){
        return;
    }
    if(root && root.left === null && root.right === null){
        nodeValues.push(root?.val)
        return;
    }
    depthFirstSearch(root.left, nodeValues)
    nodeValues.push(root.val)
    depthFirstSearch(root.right, nodeValues)
    return;
}