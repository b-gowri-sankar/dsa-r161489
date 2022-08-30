var diffWaysToCompute = function(expression) {
    let i = 0;
    return solve(expression, 0, expression.length - 1)
};

function solve(expression,i, j) {
    if(i > j){
        return []
    }
    if(j-i+1 <= 2){
        return [parseInt(expression.substring(i, j+1))]
    }
    let evaluatedData = []
    for(let k=i+1 ; k < j; k=k+2){
        if(expression[k] !== "*" && expression[k] !== "-" && expression[k] !=="+"){
            k=k+1
        }
        let solveL = solve(expression,i, k-1);
        let solveR = solve(expression, k+1, j)
        evalOfData(solveL, solveR, expression[k], evaluatedData)
    }
    return evaluatedData
}

function evalOfData(leftD, rightD, operator, data){
    leftD.forEach(left => (
        rightD.forEach(right => {
            if(operator === "*"){
                data.push(left * right)           
            } else if(operator === "-"){
                data.push(left - right)       
            } else if(operator === "+"){
                data.push(left + right)
            }
        })
    ))
}