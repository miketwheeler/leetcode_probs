const zig = "PAYPALISHIRING";

function convert(s, numRows) {
    const len = s.length;
    const rowMap = new Map();
    let rowNumber = 1;
    let down = true;
    let str = ""

    if(s.length === 1) return s;
    
    // iterate through passed the string
    for(let i=0; i < len; i++) {
        const curMapRowValue = rowMap.get(rowNumber);
        rowMap.set(rowNumber, (curMapRowValue ? curMapRowValue.concat(s[i]) : s[i]))
        down ? rowNumber++ : rowNumber--;

        if(rowNumber === 1 || rowNumber === numRows) {
            down = !down;
        }
    }

    rowMap.forEach((value, key) => str += `${value}`)
    return str;

}

console.log(`returnValue:  ${convert(zig, 4)}`);