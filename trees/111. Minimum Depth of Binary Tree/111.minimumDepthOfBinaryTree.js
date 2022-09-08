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
 var minDepth = function(root) {
    if(root === null){
        return 0
    }
      if((root?.left === null && root?.right === null) || (root?.left && root?.right)){
          return 1 + Math.min(minDepth(root?.left), minDepth(root?.right))
      }
      if(root?.left){
          return 1 + minDepth(root?.left ?? null)                        
      }
      if(root?.right){
         return 1 + minDepth(root?.right ?? null)
        }
  };