/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const numArr = [1,2,5,2,3]
const targetNum = 2;
const targetNum2 = 3;

function targetIndicies(nums, target) {
    let returnArr = [];

    nums.sort((a,b) => {
        return a-b;
    })
    console.log(nums)
    
    for(let i=0; i<nums.length; i++){
        nums[i] === target ? returnArr.push(i) : null;
    }
    
    return returnArr;

};

console.log(`targetIndiciesReturn: ${targetIndicies(numArr, targetNum2)}`)