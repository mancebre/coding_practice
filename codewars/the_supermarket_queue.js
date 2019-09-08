/**
 There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate 
 the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its 
value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it 
becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, 
with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
 */

function queueTime(customers, n) {

    if(n == 1) {
        return customers.reduce((a, b) => a + b, 0);
    }
    var total = 0, rest;

    var group = customers.splice(0, n);

    return calculateTime(total, group, customers);
}

function calculateTime(total, group, customers) {
    
    var min = Math.min.apply(null, group);
    var index = group.indexOf(min);

    group.splice(index, 1);
    for(let i = 0; i < group.length; i++) {
        group[i] -= min;
    }

    total += min;
    
    if(customers.length > 0) {
        group.push(customers.shift());
        total = calculateTime(total, group, customers);
    } else if(customers.length === 0 && group.length > 0) {
        total = calculateTime(total, group, customers);
    }

    return total;
    
}

// function queueTime(customers, n) {
//     let tills = Array(n).fill(0);

//     customers.forEach((customer) => {
//         let nextTill = tills.indexOf(Math.min(...tills))
//         tills[nextTill] += customer;
//     });

//     console.log("tills", tills)

//     return Math.max(...tills);
// }

console.log(queueTime([5,3,4], 1), 12);
console.log(queueTime([10,2,3,3], 2), 10);
console.log(queueTime([2,3,10], 2), 12);

console.log(queueTime([], 1), 0);
console.log(queueTime([1,2,3,4], 1), 10);
console.log(queueTime([2,2,3,3,4,4], 2), 9);
console.log(queueTime([1,2,3,4,5], 100), 5);

console.log("result", queueTime([11,43,45,42,6,45,19,18,13,24,40,33,50,5,10,41,19,24,29,45,18,8,22,39,24,26,39,19,18], 4), 202);