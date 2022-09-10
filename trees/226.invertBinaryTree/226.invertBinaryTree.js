var invertTree = function(root) {
    if(root === null){
        return null
    }
    let invertleftSubTree = invertTree(root.left ?? null);
    let invertRightSubTree = invertTree(root.right ?? null);
    root.left = invertRightSubTree;
    root.right = invertleftSubTree
    return root
};
