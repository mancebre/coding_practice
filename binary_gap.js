/**
 *
 * @param dec
 * @returns {*}
 */
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

/**
 *
 * @param num
 * @returns {boolean}
 */
function isInScope(num) {
    const min = 1;
    const max = 2147483647;

    if (Number.isInteger(num) && num >= min && num <= max) {
        return true;
    }

    return false;
}

/**
 *
 * @param arr
 * @returns {number}
 */
function calculateBinaryGap(arr) {
    let ln = arr.length;
    let count = [];
    let insideCount = 0;

    for (i = 0; i < ln; i++) {
        if (arr[i] == 0) {
            if(arr[i] == arr[i + 1]) {
                insideCount++;
            }
        } else if (arr[i] == 1 && insideCount > 0) {
            count.push(insideCount + 1);
            insideCount = 0;
        }
    }
    
    let solution = Math.max.apply(Math, count);
    
    if (typeof solution === "number" && solution >= 0) {
        return solution;
    }
    
    return 0;
}

/**
 *
 * @param num
 * @returns {number}
 */
function theSolution(num) {
    // Is in scope.
    if (isInScope(num)) {
        let binary = dec2bin(num);
        let binaryString = binary.toString();
        let binaryArr = binaryString.slice('');
        
        return calculateBinaryGap(binaryArr);
    }

    return 0;
}

/**
 * Test cases ******
 */
console.log("Solution", 9, theSolution(9));
console.log("Solution", 529, theSolution(529));
console.log("Solution", 51272, theSolution(51272));
console.log("Solution", 15, theSolution(15));
console.log("Solution", 53, theSolution(53));
console.log("Solution", 2147483647, theSolution(2147483647));
console.log("Solution", 2147483648, theSolution(2147483648));
console.log("Solution", 0, theSolution(0));
console.log("Solution", -1, theSolution(-1));
console.log("Solution", "A", theSolution("A"));
console.log("Solution", null, theSolution(null));
console.log("Solution", theSolution());