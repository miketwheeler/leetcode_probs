/**
 * @param {number[]} digits
 * @return {number[]}
 */

const digits1 = [1,2,3]
const digits2 = [4,3,2,1]
const digits3 = [9]
const digits4 = [1,2,3,4,5,6,7,8,9]
const digits5 = [9,9]

function plusOne(digits) {

    digits.push(digits.pop()+1);
    
    for(let i=digits.length-1; i>0; i--) {
        if(digits[i] === 10) {
            digits[i]=0;
            digits[i-1]++;
        }
        else {
            break;
        }
    }

    digits = digits.join("");

    return digits.split("");
};
    
console.log(`returnedArr: ${plusOne(digits5)}`)