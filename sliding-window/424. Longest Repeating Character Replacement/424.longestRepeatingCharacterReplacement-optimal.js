// You are given a string s and an integer k. 
// You can choose any character of the string and change
//  it to any other uppercase English character. You can perform
//   this operation at most k times.

// Return the length of the longest substring containing
//  the same letter you can get after performing the above operations.
//LINK: https://leetcode.com/problems/longest-repeating-character-replacement/
var characterReplacement = function(s, k) {
    let left = 0, right = 0, output = 0, maxf = 0;
    let frequency = {}
    while(right < s.length){
        let char = s[right];
        let charCount = 1 + (frequency[char] || 0)
        frequency[char] = charCount
        maxf = Math.max(maxf, charCount)
        //maxf gives most frequent character until that point
        // while((right-left+1) - maxf > k){
        //     frequency[s[left]] = frequency[s[left]] - 1;
        //     left++
        // }
        output = Math.max(output, right-left+1)
        right++;
    }
    return output
};

//Time Complexity: O(n)
//Space Complexity: O(n)