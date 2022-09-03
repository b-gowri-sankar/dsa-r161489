/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
 var maximumBobPoints = function(numArrows, aliceArrows) {
    let n = aliceArrows.length;
    let m = numArrows + 1;
    let memo = []
    for(let i=0; i<n; i++){
        let data = []
        for(let j=0; j<m; j++){
            if(i== 0 || j==0){
                data.push(0)
            } else{
                data.push(-1)
            }
        }
        memo.push(data)
    }
   for(let i=1; i<n; i++){
       for(let j=1; j < m; j++){
           if(aliceArrows[i] >= j){
               memo[i][j] = memo[i-1][j]
           } else {
               memo[i][j] = Math.max(i+memo[i-1][j-(aliceArrows[i] + 1)], memo[i-1][j])
           }
       }
   }
//   return memo[n-1][m-1]
   return getArrayOfData(memo, n-1, m-1, aliceArrows).reverse()
};

function getArrayOfData(memo, i, j, aliceArrows){
    let elements = []
    while(i > 0 && j>0){
        if(aliceArrows[i] >= j){
            elements.push(0)
            i--;
        } else{
            let ifChose = i + memo[i-1][j-(aliceArrows[i] + 1)]
            let ifNotChose = memo[i-1][j]
            if(ifChose > ifNotChose){
                elements.push(aliceArrows[i]+1)
                j= j-(aliceArrows[i] + 1)
                i--;
            } else {
                elements.push(0);
                i--;
            }
        }
    }
    if(j === 0){
        while(i >= 0){
            elements.push(0)
            i--;
        }
    } else {
        elements.push(j)
    }
    return elements
}