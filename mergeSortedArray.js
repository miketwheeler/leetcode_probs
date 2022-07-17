/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const numsx1 = [1,2,3,0,0,0];
const mx1 = 3;
const numsx2 = [2,5,6];
const nx2 = 3;

// const numsx1 = [1]
// const mx1 = 1
// const numsx2 = []
// const nx2 = 0

// const numsx1 = [0]
// const mx1 = 0
// const numsx2 = [1]
// const nx2 = 1

// const numsx1 = [-1,0,0,3,3,3,0,0,0]
// const mx1 = 6
// const numsx2 = [1,2,2]
// const nx2 = 3

function merge(nums1, m, nums2, n) {

    nums1.push(...nums2)
    nums1.sort((a,b) => a-b);

    while(nums1.indexOf(0) !== -1 && nums1.length > (m+n)) {
        nums1.splice(nums1.indexOf(0), 1);
    }

    return nums1;
};


console.log(`returned: ${merge(numsx1, mx1, numsx2, nx2)}`)