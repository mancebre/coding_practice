/**
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

PATH:https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
 */

function stray(numbers) {
    let resultArr = [];
    for(let number of numbers) {
        if(typeof resultArr[number] === "undefined") {
            resultArr[number] = 1;
        } else {
            resultArr[number] += 1;
        }
    }

    for(let i in resultArr) {
        if(resultArr[i] === 1) {
            return +i;
        }
    }

    return false;
}

// console.log(stray([17, 17, 3, 17, 17, 17, 17]), [17, 17, 3, 17, 17, 17, 17], 3);
console.log(stray([1, 1, 2]), [1, 1, 2], 2);