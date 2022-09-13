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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    if(!root && !subRoot){
        return true
    }
   if(!root && subRoot){
       return false
   }
    if(!subRoot && root){
        return false
    }
    if(root.val === subRoot.val && isSameTree(root, subRoot)){
       return true
    } else {
        return isSubtree(root.left??null, subRoot) || isSubtree(root?.right ?? null, subRoot)
    }
};

var isSameTree = function(p, q) {
    if(p === null || q === null){
        if(p || q){
            return false
        } else {
            return true
        }
    }
    if(p.val !== q.val){
        return false
    }
    let isleftSubTreeSame = isSameTree(p.left, q.left);
    let isRightSubTreeSame = isSameTree(p.right, q.right);
    return isleftSubTreeSame && isRightSubTreeSame
};