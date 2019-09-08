/**
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
 */

function validParentheses(parens) {
   // Must have equal sum of both parentheses.
   var open = 0;
   for(let i = 0; i < parens.length; i++) {
       if(parens[i] == "(") {
           open++;
       } else if(parens[i] == ")") {
           open--;
       }
       if(open < 0) {
          return false;
       }
   }

   return open == 0;
}

console.log(validParentheses( "()" ));
console.log(validParentheses( "()(()))" ));
console.log(validParentheses( "))" ));
console.log(validParentheses( ")" ));
console.log(validParentheses( "((" ));
console.log(validParentheses( ")(" ));
console.log(validParentheses( ")(()))" ));
console.log(validParentheses( "(" ));
console.log(validParentheses( "(())((()())())" ));
console.log(validParentheses( "()))((" ));