// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 
// 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. 
// You may return the answer in any order.
//LINK: https://leetcode.com/problems/repeated-dna-sequences/

var findRepeatedDnaSequences = function(s) {
    let uniqueSubDnaSequences = new Set();
    let repeatedSubSequences = new Set();
    let i=0;
    let j=0;
    let windowSize=10;
    let subStr = ""
    while(j<s.length){
        if(j-i+1 < windowSize){
            subStr+=s[j]
            j++;
            continue;
        }
        subStr +=s[j]
        if(uniqueSubDnaSequences.has(subStr)){
            repeatedSubSequences.add(subStr)
        }
        uniqueSubDnaSequences.add(subStr)
        i++;
        j++;
        subStr = subStr.slice(1)
    }
    return [...repeatedSubSequences]
};

//time complexity: O(n)
//space complexity: O(n) it will store all the unique substrings.