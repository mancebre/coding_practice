/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
	var sum = "";
	var r = 0;
	var a1, a2, i;

	// Pick the shortest string as first parameter and the longest as second parameter in my algorithm
	if (a.length < b.length) {
		a1 = a;
		a2 = b;
	}
	else {
		a1 = b;
		a2 = a;
	}
	a1 = a1.split("").reverse();
	a2 = a2.split("").reverse();

	// Sum a1 and a2 digits
	for (i = 0; i < a2.length; i++) {
		var t = ((i < a1.length) ? parseInt(a1[i]) : 0) + parseInt(a2[i]) + r;
		
		sum += t % 10;

		r = t < 10 ? 0 : Math.floor(t / 10);
	}
	// Append the last remain
	if (r > 0)
		sum += r;

	sum = sum.split("").reverse();
	
	// Trim the leading "0"
	while (sum[0] == "0")
		sum.shift();

	return sum.length > 0 ? sum.join("") : "0";
}


console.log(add("110", "1111111111"), "1000000000");
console.log(add("1", "1"), "2");
console.log(add("123", "456"), "579");
console.log(add("888", "222"), "1110");
console.log(add("1372", "69"), "1441");
console.log(add("12", "456"), "468");
console.log(add("101", "100"), "201");
console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963");