

const numArr = [5,7,7,8,8,10];
const targ = 8;

function searchRange(nums, target) {
    
    return [nums.indexOf(target), nums.lastIndexOf(target)];

};


console.log(`searchRangeReturned: ${searchRange(numArr, targ)}`)