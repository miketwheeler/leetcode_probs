/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
const badVersion = 8;
const n = 15;
let callCount = 0;


function solution(isBadVersion) {
    
    function isBadVersion(value) {
        return value === badVersion;
    };

    let first = 1;
    let last = n;
    while (first < last) {
        let mid = Math.floor((first + last) / 2);
        if(isBadVersion(mid)) {
            last = mid;
        } else {
            if(first === mid) return last;
            first = mid;
        }
    }
    return last;
};


console.log(`returnedFromSolution: ${solution(n)}`)