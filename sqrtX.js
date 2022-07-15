/**
 * @param {number} x
 * @return {number}
 */



const in1 = 4
const in2 = 8


function mySqrt(x) {
    return Math.sqrt(x).
};


console.log(`returned: ${mySqrt(in1)}`)


// var mySqrt = function(x) {
//     if (x === 0 || x === 1) return x;
//     let start = 1;
//     let end = Math.floor(x / 2);
//     while (start <= end) {
//       const mid = Math.floor((end - start) / 2 + start);
//       const v1 = mid ** 2;
//       const v2 = (mid + 1) ** 2;
//       if (v1 === x || (v1 < x && v2 > x)) return mid;
//       if (v1 < x) start = mid + 1;
//       else if (v1 > x) end = mid - 1;
//     }
    
//     return null;
//   };