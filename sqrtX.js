/**
 * @param {number} x
 * @return {number}
 */



const in1 = 4
const in2 = 8

// compares no-square situations and early returns else iterate until a squared int > 1 just passes 'x', then if it just passes 'x' -> subtract 1 
//          from the square to 'round down' to the next lower square to return

function mySqrt(x) {
    let sq = 1;
    
    if(x===0 || x===1)
        return x;
    
    while(x > sq*sq) 
        sq++;
    
    if(x < sq*sq)
        sq--;
    
    return sq;
};


console.log(`returned: ${mySqrt(in1)}`)