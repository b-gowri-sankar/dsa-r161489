/**
 * @param {string} s
 * @return {number}
 */
//  A string is good if there are no repeated characters.

//  Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
 
//  Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
 
//  A substring is a contiguous sequence of characters in a string.
// leetcode link: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

 var countGoodSubstrings = function(s) {
    let i=0;
    let j=0;
    let subStringsCharCount = new Map()
    let count = 0;
    while(j < s.length){
       const rightChar = s[j];
        const val = subStringsCharCount.get(s[j]) || 0;
        
        subStringsCharCount.set(rightChar, val + 1); 
        if(j-i + 1 < 3){
            j++;
            continue
         }
        
          if(subStringsCharCount.size === 3){
              count++;
          }
        
          const leftChar = s[i];
            subStringsCharCount.set(leftChar, subStringsCharCount.get(leftChar) - 1);
            if (subStringsCharCount.get(leftChar) === 0) {
                subStringsCharCount.delete(leftChar);
            }
            i++;
            j++;
    }
    return count
};

//Time complexity: O(n)
//Space Complexity: O(k)