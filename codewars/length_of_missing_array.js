/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays. 

PATH:https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/
*/

function getLengthOfMissingArray(arrayOfArrays) {
    if(!arrayOfArrays || arrayOfArrays.length == 0) {
        return 0;
    }
    let lengths = [];
    for(let i in arrayOfArrays) {
        if(!arrayOfArrays[i] || !arrayOfArrays[i].length) {
            return 0;
        }
        lengths.push(arrayOfArrays[i].length);
    }
    lengths.sort(function(a, b) {
        return a - b;
    });

    let smalestNum = lengths[0];
    let result;
    for(let j of lengths) {
        if(j !== smalestNum) {
            result = smalestNum;
            smalestNum = j;
        }
        smalestNum++;
    }

    return result;
}

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);