/**
 There is an array with some numbers. All numbers are equal except for one. Try to find it!

 findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

 It’s guaranteed that array contains more than 3 numbers.

 The tests contain some very huge arrays, so think about performance.
 **/

// function findUniq(arr) {
//     return arr.filter(function(value){
//         return arr.indexOf(value) === arr.lastIndexOf(value);
//     })[0] || -1;
// }

function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]) {
        return arr[i];
      }
    } else {
      if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
  }
}

console.log(findUniq([0, 1, 0])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3, 3, 3])); // 10
console.log(findUniq([4, 1, 1, 1, 1])); // 4
