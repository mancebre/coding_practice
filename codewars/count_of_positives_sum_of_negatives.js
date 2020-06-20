/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

PATH:https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
*/

function countPositivesSumNegatives(input) {
    if(!input || input.length == 0) {
        return [];
    }

    let positive = [];
    let negative = [];
    
    positive = input.filter((v) => v > 0);
    negative = input.filter((v) => v < 0);
    let countPositives = positive.length;
    let sumNegatives = negative.reduce((a, b) => a + b, 0);
    return [countPositives, sumNegatives];
}

console.log(countPositivesSumNegatives([]), [10, -65])