/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var allPossibleFBT = function(n) {
    if(n%2 === 0){
        return []
    } 
    if(n === 1){
        return [new TreeNode(0)]
    }
    let k = 2;
    let rootNodes = []
    for(let i=1; i < n-1; i=i+k ){//n-1 because for rootnode and then we are finding all possilbe rootNode of left and right and create rootNode for them
        let leftPossilbeRootNodes = allPossibleFBT(i)
        let rightPossilbeRootNodes = allPossibleFBT(n-1-i)
        leftPossilbeRootNodes.forEach(left => (
            rightPossilbeRootNodes.forEach(right => (
                rootNodes.push(new TreeNode(0, left, right))
            ))
        ))
    }
    return rootNodes
};