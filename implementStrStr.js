/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const haystack1 = "hello"
const needle1 = "ll"
const haystack2 = "aaaaa"
const needle2 = "bba"


function strStr(haystack, needle) {

    return haystack.indexOf(needle);
};

console.log(`returned: ${strStr(haystack2, needle2)}`)