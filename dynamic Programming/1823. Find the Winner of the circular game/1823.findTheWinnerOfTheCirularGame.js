var findTheWinner = function(n, k) {
    let friends = Array.from({length: n}, (_, i) => i + 1)
    return findLoser(friends, 0, k)
};

function findLoser(array, i, k) {
    if(array.length === 1) return array[0];
    
    let lostIndex = i+k-1;
    lostIndex = lostIndex%array.length;
    array.splice(lostIndex, 1);
    
    return findLoser(array, lostIndex, k)
}