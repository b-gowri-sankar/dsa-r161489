// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string],
//  where the encoded_string inside the square brackets
//   is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid;
//  there are no extra white spaces, square brackets
//   are well-formed, etc. Furthermore, you may assume
//    that the original data does not contain any digits
// and that digits are only for those repeat numbers
// , k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that
//  the length of the output will never exceed 105.

var decodeString = function(s) {
    let stack = [];
    let i = 0;
    while(i < s.length){
        if(s[i] !== "]"){
            stack.push(s[i])
            i++;
            continue;
        }
        let str = ""
        while(stack[stack.length - 1] !== "[" && stack.length > 0){
            let popedChar = stack.pop();
            str = popedChar + str
        }
        stack.pop()
        let k = ""
        while(stack.length > 0 && stack[stack.length -1 ] >= "1" && stack[stack.length - 1] <= "9" ){
            let digit = stack.pop()
            k = k + digit
        }
        k = parseInt(k.split("").reverse().join(""));
        stack.push(str.repeat(k))
        i++;
    }
    return stack.join("")
};

//Time Complexity:
