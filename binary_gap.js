/**
 A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

 For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

 Write a function:

 function solution(N);

 that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

 For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

 Write an efficient algorithm for the following assumptions:

 N is an integer within the range [1..2,147,483,647].
 */

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

    return Number.isInteger(num) && num >= min && num <= max;
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

    // Loop thought binary array.
    for (let i = 0; i < ln; i++) {
        // Count all zeros in a row
        if (arr[i] === "0") {
            if(arr[i] === arr[i + 1]) {
                insideCount++;
            }
        } else if (arr[i] === "1" && insideCount > 0) {
            // Reset counter if element is not zero.
            count.push(insideCount + 1);
            insideCount = 0;
        }
    }

    // Return biggest number from array.
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
    // Is it integer between 1 and 2147483647
    if (isInScope(num)) {
        // Convert integer to binary.
        let binary = dec2bin(num);
        // Convert binary to string
        let binaryString = binary.toString();
        // Convert string to array.
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