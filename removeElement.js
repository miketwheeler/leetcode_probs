/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const nums1 = [0,1,2,2,3,0,4,2]
const value = 2

function removeElement(nums, val) {
    
    for(let i=nums.length-1; i>-1; i--) {
        if(nums[i] === val) nums.splice(i, 1);
    }

    return nums;
};


console.log(`removeEls returned: ${removeElement(nums1, value)}`)