

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums1 = [0,1,0,3,12]
const nums2 = [1]
const nums3 = [0]
const nums4 = [0,0,1]

function moveZeroes(nums) {
    
    if(nums.length <= 1) {
        return nums;
    }
    
    for(let i=nums.length-1; i>-1; i--){
        console.log(`nums before: ${nums}`)
        nums[i] === 0 ? nums.push(nums.splice(i, 1)) : null;
        console.log(`nums[i]: ${nums[i]}, and nums: ${nums}`)
    }

    return nums;

};


console.log(`returned: ${moveZeroes(nums4)}`)