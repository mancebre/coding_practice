/*
Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1
Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

  countChange(4, [1,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0

  URL: "https://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript"
*/

var countChange = function(money, coins) {
  console.log(money, coins);
  if (money < 0 || coins.length === 0) return 0;
  else if (money === 0) return 1;
  else
    return (
      countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
    );
};

let result = countChange(4, [1, 2]);
console.log("Result", result);

// console.log(countChange(4, [1,2]), 3, 'Simple case');
// console.log(countChange(10, [5,2,3]), 4, 'Another simple case');
// console.log(countChange(11, [5,7]), 0, 'No change');
// console.log(countChange(4, [1,2]));
