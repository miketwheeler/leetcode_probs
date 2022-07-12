/**
 * @param {string} s
 * @return {boolean}
 */

const s1 = "()[]{}"
const s2 = "(]"
const s3 = "]"
const s4 = "(()){}[]]"
const s5 = "[](){}[](){}"
const s6 = "(){}}{"


function isInvalid(s) {
    // none check
    if(s.length === 0 || s.length % 2 !== 0) {
        return false;
    }
    
    // if present reduce str
    while (s.indexOf("{}") !=-1 || s.indexOf("[]") !=-1 || s.indexOf("()") !=-1) {
        s=s.replace("()","");
        s=s.replace("[]","");
        s=s.replace("{}","");
    }

    return s === "";

};

console.log(`isInvalid Results: ${isInvalid(s4)}`)