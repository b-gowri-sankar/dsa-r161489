// Given a string s, find the length of the longest substring without repeating characters.

//LINK: https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
    let i=0;
    let j=0;
    let maxUniqueCharacters = -Infinity;
    let totalCount = 0;
    let charFrequency = new Map()
    while(j < s.length){
        let char = s[j];
        let charCount = charFrequency.get(char) || 0;
        charFrequency.set(char, charCount+1);
        totalCount++;
        if(totalCount === charFrequency.size){
            maxUniqueCharacters = Math.max(maxUniqueCharacters, charFrequency.size);
            j++;
            continue;
        }
        while(totalCount !== charFrequency.size){
            let leftCharCount =charFrequency.get(s[i]) - 1;
            charFrequency.set(s[i], leftCharCount)
            if(leftCharCount === 0){
                charFrequency.delete(s[i])
            }
            totalCount-=1;
            i++;
        }
        j++
    }
    return maxUniqueCharacters
};

//Time complexity: O(n)
//Space Complexity: O(k)