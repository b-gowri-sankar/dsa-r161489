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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    if(!root){
        return []
    }
    if(!root.left && !root.right){
        return [`${root.val}`]
    }
    let possibleLeftPaths = binaryTreePaths(root.left)
    let possilbeRightPaths = binaryTreePaths(root.right)
    let paths = []
    possibleLeftPaths.forEach(path => {
        paths.push(`${root.val}->${path}`)
    })
    possilbeRightPaths.forEach(path => {
        paths.push(`${root.val}->${path}`)
    })
    return paths
};