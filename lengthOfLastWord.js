/**
 * @param {string} s
 * @return {number}
 */

const s1 = "Hello World"
const s2 = "   fly me   to   the moon  "
const s3 = "luffy is still joyboy"


function lengthOfLastWord(s) {
    // s.trim() to remve the spaces at the ends.
    // start at the end of the string and work backwards
    // if str.charCodeAt[i] !== (code for spaceChar) && lookahead to next -> grab the index of the first-end char
    // proceed until false ->  at i or i-1, if i-1 return the first char index

    // return the substr(firstChar, toLastChar);

    s = s.trim();
    let ind = 0

    for(let i=s.length-1; i>0; i--) {
        if(s.charCodeAt(i-1) === 32) {
            ind=i;
            console.log(`currentIndx: ${i}`)
            break;
        }
    }

    return s.substr(ind);
};


// return last word && it's length
console.log(`returned word: ${lengthOfLastWord(s2)}`)