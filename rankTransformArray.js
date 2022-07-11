/**
 * @param {number[]} arr
 * @return {number[]}
 */


const array = [37,12,28,9,100,56,80,5,12];
// sorted:    [5,9,12,12,28,37,56,80,100]
// indxRank:  [5, 1,]
const array2 = [40, 10, 20, 30];
// Supposed to Output: [5,3,4,2,8,6,7,1,3]
function arrayRankTransform(arr) {

    if(arr.length === 0){
        return arr;
    }
    
    const sortedArr = new Set([...[...arr].sort((a,b) => a-b)]).values();
    const compArr = [...sortedArr];
    const rankArr = [];

    for(let i=0; i<arr.length; i++) {
        rankArr.push(compArr.indexOf(arr[i])+1)
    }

    return rankArr;
};


console.log(arrayRankTransform(array));