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
 var isBalanced = function(root) {
    return findMaxHeight(root)?.isBalanced
 };
 
 function findMaxHeight(root){
     if(root === null){
         return {
             height: 0,
             isBalanced: true
         }
     }
     let leftsubTreeInfo = findMaxHeight(root?.left ?? null)
     let rightsubTreeInfo = findMaxHeight(root?.right ?? null)
     let isBalanced = Boolean(Math.min(leftsubTreeInfo?.isBalanced, rightsubTreeInfo?.isBalanced))
     if(Math.abs(leftsubTreeInfo.height - rightsubTreeInfo.height) <= 1){
         return {
             height: 1 + Math.max(leftsubTreeInfo?.height, rightsubTreeInfo?.height),
             isBalanced: isBalanced && true
         }
     } else {
         return {
             height: 1 + Math.max(leftsubTreeInfo?.height, rightsubTreeInfo?.height),
             isBalanced: false
         }
     }
 }