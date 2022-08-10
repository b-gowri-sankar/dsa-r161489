// You are visiting a farm that has a single row of fruit trees arranged from left to right.
//  The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit.
//  There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree 
// (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.
//Link: https://leetcode.com/problems/fruit-into-baskets/

var totalFruit = function(fruits) {
    let left=0, right = 0, max = -Infinity, chars = {}, requiredLength=0;
    while(right < fruits.length){
        let fruitType = fruits[right];
        let typeFr = 1 + (chars[fruitType] || 0)
        if(typeFr === 1){
            requiredLength +=1
        }
        chars[fruitType] = typeFr
        while(requiredLength > 2){
            let fruitType = fruits[left]
            let typeFr =  (chars[fruitType]) - 1;
            if(typeFr === 0){
                requiredLength -=1
            }
            chars[fruitType] = typeFr
            left++;
        }
        if(requiredLength <= 2){
            max = Math.max(right - left + 1, max)
        }
        right++
    }
    return max
};

//Time Complexity: O(n)
//Space Complexity;: O(k)