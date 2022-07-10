// CONSTRAINTS
//  1 <= strs.length <= 200
//  0 <= strs[i].length <= 200
//  strs[i] consists of only lowercase English letters.

const stringArr1 = ["flower","flow","flight", "flutter"];
const stringArr2 = ["philippines","philosophy","phillips", "phantom"];
const stringArr3 = ["xenotype", "phenotype", "family", "synchronous"];
const stringArr4 = ["b"]
const stringArr5 = ["dog","racecar","car"];

const stringArr6 = ["cir","car"]


let counter = 0;
let returnString = "";

function longestCommonPrefix(strs) {
    const len = strs.length;
    
    if(len === 1) return strs[0];

    // finds commonality between at least the first 2 and then breaks when no match
    for(let i=0; i < strs[0].length; i++) {
        if(strs[0][i] === strs[1][i]) {
            counter++;
        }
        else
            break;
    }

    // if(returnString === undefined) {
    //     returnString = "";
    // }
    // more than 2 elements and is something to return from above
    returnString ? returnString = strs[0].slice(0, counter) : returnString = "";
        // if more specimens than 2 - compare the prefix to the remaining els, 
    if(len > 2 && returnString !== "") {
        while(true) {
            returnString = [...strs].every(
                (str) => str.includes(returnString)) 
                ? console.log(`no: ${returnString}`)
                : returnString.slice(0,-1);
            if(!returnString)
                break;
        }
    }

    if(returnString === undefined){
        returnString = "";
    }

    return returnString;

};


console.log(`returned:  ${longestCommonPrefix(stringArr5)} && the counter: ${counter}`);

 // theory: if the first 2 strings don't have common prefix then none of set would have a least common prefix too