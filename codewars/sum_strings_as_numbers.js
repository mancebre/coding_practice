/**
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
 */

function sumStrings(a, b) {
  a = a.replace(/^0+/, "");
  b = b.replace(/^0+/, "");
  a = Number.isNaN(a) ? 0 : a;
  b = Number.isNaN(b) ? 0 : b;

  return add(a, b).toString();
}

function add(str1, str2) {
  let sum = "";

  let str1Length = str1.length;
  let str2Length = str2.length;

  if (str2Length > str1Length) {
    let temp = str2;
    str2 = str1;
    str1 = temp;
  }

  let carry = 0;
  let a;
  let b;
  let temp;
  let digitSum;
  for (let i = 0; i < str1.length; i++) {
    a = parseInt(str1.charAt(str1.length - 1 - i));
    b = parseInt(str2.charAt(str2.length - 1 - i));
    b = b ? b : 0;
    temp = (carry + a + b).toString();
    digitSum = temp.charAt(temp.length - 1);
    carry = parseInt(temp.substr(0, temp.length - 1));
    carry = carry ? carry : 0;

    sum = i === str1.length - 1 ? temp + sum : digitSum + sum;
  }

  return sum;
}

console.log(sumStrings("00103", "08567"), "8670");
// console.log(sumStrings('', '5'),'5');
// console.log(sumStrings('712569312664357328695151392','8100824045303269669937'),'712577413488402631964821329');
// console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'),'131151201344081895336534324866');
