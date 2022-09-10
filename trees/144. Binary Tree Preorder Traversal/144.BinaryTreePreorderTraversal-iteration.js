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


 var preorderTraversal = function(root) {
    if(!root){
        return []
    }
  let nodeData = [root];
    let currentNode = root
    let res = []
    while(nodeData?.length > 0){
       while(currentNode){
        res.push(currentNode.val)
        nodeData.push(currentNode)
        currentNode = currentNode.left
        }
        let node = nodeData.pop()
        currentNode = node.right
    }
return res
};
