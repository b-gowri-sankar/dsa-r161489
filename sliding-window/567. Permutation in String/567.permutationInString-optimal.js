// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 
//LINK: https://leetcode.com/problems/permutation-in-string/

 var checkInclusion = function(s1, s2) {
    let right = 0;
    let left = 0;
    let chars = {
        notZeroCount: 0,
    };
    for(let i=0; i<s1.length; i++){
        let char = s1[i];
        let charFr = 1 + (chars[s1[i]] || 0)
        let {notZeroCount} = chars;
        if(charFr === 1){
            chars.notZeroCount = notZeroCount + 1;
        }
        chars[char] = charFr
    }
    let windowSize = s1.length;
    while(right < s2.length){
        let char = s2[right];
        if(char in chars){
            let charFr = chars[char] - 1;
            if(charFr === 0){
                chars.notZeroCount -=1;
            }
            chars[char] = charFr;
        }
        if(right - left + 1 < windowSize){
            right++;
            continue;
        } else if(right - left + 1 === windowSize){
            if(chars["notZeroCount"] === 0){
                return true
            }
            let char = s2[left];
            if(char in chars){
                let charFr = chars[char] + 1;
                if(charFr === 1){
                    chars.notZeroCount +=1;
                }
                chars[char] = charFr
            }            
            left++;
            right++;
        }
    }
    return false
};

//Time Complexity: O(n)
//Space Complexity: O(1) if they are alphabets only else O(k)