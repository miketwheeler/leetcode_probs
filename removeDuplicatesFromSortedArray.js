/**
 * @param {number[]} nums
 * @return {number}
 */

const inputNums = [1,1,2];
const inputNums2 = [1, 1, 2, 2, 5, 7, 7, 8 , 8 , 8]

function removeDuplicates(nums) {

    for(let i=nums.length-1; i>-1; i--) {
        if(nums[i] === nums[i-1]) nums.splice(i-1, 1);
    }

    // the task didn't specify returning a value - attempts at submitting were'nt yeilding results so looked into discussions
    //      - thankfully someone posted that returning wasn't necessary. left here for testing insitu
    // return nums;  

};

console.log(`returned: ${removeDuplicates(inputNums)} length: ${inputNums.length}`)