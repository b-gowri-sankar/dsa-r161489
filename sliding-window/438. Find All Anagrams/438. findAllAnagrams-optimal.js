// Given two strings s and p, return an array of all the start indices of p's 
// anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by 
// rearranging the letters of a different word or phrase
// , typically using all the original letters exactly once.
//LINK: https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    let left = 0;
    let right = 0;
    let windowSize = p.length;
    let chars = {
        numbersCountNotZero: 0
    };
    let output = []
    
    for(let i = 0; i < p.length;i++ ){
        let char = p[i];
        let charCount = 1 + (chars[char] || 0);
        chars[char] = charCount
        if(charCount === 1){
            chars.numbersCountNotZero +=1
        }
    }
    
    while(right < s.length){
        stepThecount(chars, s[right], -1, 0)
        if(right - left + 1 < windowSize){
            right++;
            continue;
        }
        else if(right - left + 1 === windowSize){
            if( chars.numbersCountNotZero === 0 ){
                output.push(left)
            }
            stepThecount(chars, s[left], 1, 1)
            right++;
            left++;
        }
    }
    return output
};

function stepThecount(chars, char, step, equalTo) {
     if(char in chars){
         chars[char] = chars[char] + step
         if(chars[char] === equalTo){
            chars.numbersCountNotZero +=step
        }
    }
}

//time complexity: O(n)
//Space Complexity: O(1)