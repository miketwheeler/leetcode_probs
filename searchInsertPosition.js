

const nums1 = [1,3,5,6]
const nums2 = [1,3,5,6, 200, 400, 420, 588]



var searchInsert = function(nums, target) {
    if(nums.includes(target)) return nums.indexOf(target);
    
    if(target < nums[0]) return 0;

    if(target > nums[nums.length-1]) return nums.length;
    
    else {
        for(var i=0; i<nums.length; i++) {
            if(nums[i] >= target) {
                return i;
            }
        }
    }
};




console.log(`results: ${searchInsert(nums1, 2)}`)