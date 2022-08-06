var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    let i=0;
    let j=0;
    while(j<nums.length){
        if(j-i<= k){
            if(set.has(nums[j])) {
                return true
            }
            set.add(nums[j])
            j++
        } else {
            set.delete(nums[i])
            i++;
        }  
    }
    return false
}

//space complexity: O(k) size of the sliding window
//time complexisty: O(n) size of the array