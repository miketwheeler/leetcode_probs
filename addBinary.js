/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const a1 = "11"
const b1 = "1"
const c1 = '1010'
const d1 = '1011'

let value = -1;
retString = "";

function addBinary(a, b) {
    
    if(Math.abs(value) === b.length || Math.abs(value) === a.length) {
        if(carry) {
            retString[value]++ 
            if(retString[value] === 2) {
                retString[value] = 0;
                retString[value-1] = 1;
            }
            else {
                return retString;
            }
        }
        return value;
    }
    else {
        ret[a[a.length+value] + b[b.length+value]]
    }
};

console.log(`returned: ${addBinary(a1, b1)}`)