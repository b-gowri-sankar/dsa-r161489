var containsNearbyDuplicate = function(nums, k) {
    let numberIndices = {};
    for(let i=0; i<nums.length; i++){
        if(nums[i] in numberIndices){
            let indices = numberIndices[nums[i]];
            for(let j=0; j< indices.length; j++){
                if(Math.abs(i-indices[j]) > k){
                    continue
                }
                return true
            }
            indices.push(i)
        } else {
            numberIndices[nums[i]] = [i]
        }
    }
  return false
};

//space complexity: O(n)
//Time complexist: O(m)