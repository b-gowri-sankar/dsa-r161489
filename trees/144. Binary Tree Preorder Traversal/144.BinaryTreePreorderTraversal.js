var preorderTraversal = function(root) {
    let nodeData = [];
      helper(root, nodeData);
      return nodeData
  };
  
  function helper(root, nodeData) {
        if(root === null){
          return;
      }
      nodeData.push(root?.val)
      helper(root.left, nodeData)
      helper(root?.right, nodeData)
      return;
  }