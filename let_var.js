/**
A good way to understand the difference here between the different scopes of var and let is to rewrite the code.  The var loop you wrote is equivalent to writing: 
var i; // variable initialized lexically where it actually lives
for (i=0;i<3;i++){setTimeout(()=>console.log(i),1);}
by the time setTimeout executes 1 ms later, the i variable has a value of 3 (the value i reaches to terminate the loop) so it displays 3, three times in the console.

Your 'let' example uses block scope with the let keyword
for (let i=0;i<3;i++){setTimeout(()=>console.log(i),1);}
The loop creates 3 blocks with separate scope for each value of i. That value is stored by your inner arrow function through a concept called closure. So your 'let' example yields the same as any of these:
for (let i=0;i<3;i++){setTimeout(console.log(i),1);}
for (var i=0;i<3;i++){setTimeout(console.log(i),1);}
for (var i=0;i<3;i++){setTimeout(console.log,1,i);}

So I think the more interesting question is:
Why don't these two lines yield the same output?
for (var i=0;i<3;i++){setTimeout(()=>console.log(i),1);} //3,3,3
for (var i=0;i<3;i++){setTimeout(console.log(i),1);} //0,1,2

The answer is all about closure and execution context.
 */

for(let i = 0; i < 3; i++) {
    setTimeout(()=>console.log("let", i), 1);
}

for(var i = 0; i < 3; i++) {
    setTimeout(()=>console.log("var", i), 1);
}