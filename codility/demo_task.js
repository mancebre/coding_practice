/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
* */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let maxTestNum = 100000;

    for(let testNum = 1; testNum <= maxTestNum; testNum++) {
        if(!A.includes(testNum)) {
            return testNum;
        }
    }

    // for(let key in A) {
    //     console.log(A[key]);
    // }
}

let A = [-1,-2,1, 3, 6, 4, 1, 2, 5,8,9,33,64,99,80,7];

console.log(solution(A), A);