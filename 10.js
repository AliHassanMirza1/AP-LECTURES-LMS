/*
Required Software
Install the LTS release of NodeJS from
https://nodejs.org/en/download/


Install typescript on your machine​
npm install -g typescript​

tsc <filename.ts> (tsc is Typescript compiler)
tsc --version  ​
tsc –help​

Execute a JavaScript file on command line using node.​
node <filename>​

Execute a TypeScript file on command line using node.​
ts-node <filename>​



Statically Typed Languages
    In statically typed programming languages,
    type checking occurs at compile time.
    Example languages: Java, Haskell, C, C++, C#, Scala, Kotlin, Fortran, Go, Pascal, and Swift

Dynamically Typed Langauges
In dynamically typed languages,
 type checking takes place at runtime or at execution time.
 This means that variables are checked against types only
 when the program is executing
 Example languages: Python, JavaScript, Lisp, PHP, Ruby.

*/
var n = 100;
console.log("n: " + n);
var m = 500;
var address;
address = "Lahore";
console.log(address);
var addressLength = address.length;
var temp = "ABCD"; //type inference
console.log("temp : " + temp);
var temp2; //If type cannot be inferred, it would be any
temp2 = "ABCD";
console.log("temp2: ", temp2);
temp2 = 45;
var b;
var x = 10;
function helloWorld1() {
    console.log("Hello World-1");
}
helloWorld1();
var hello2 = function hello2(msg) {
    //console.log("Hello " + msg);
    console.log("Hello  ".concat(msg));
};
hello2("Type Script-2");
var hello3 = function (msg) {
    console.log("Hello " + msg);
};
hello3("TypeScript-3");
var add = function (n, m) {
    return n + m;
};
console.log(add(5, 7));
//Variables of function types. 
var addFun;
addFun = add;
console.log(addFun(6, 10));
//Passing functions as parameters.
function f(g) {
    console.log("Function f: " + g(4, 9));
    return "abcd";
}
console.log(f(add));
var sqr = function (n) { return n * n; };
var nums = [1, 5, 8, 9];
var map = function (g, data) {
    var output = [];
    for (var i = 0; i < data.length; i++)
        output.push(g(data[i]));
    return output;
};
var arr = [4, 5, 10];
var result = map(function (n) { return n * 2; }, arr);
for (var i = 0; i < result.length; i++)
    console.log(result[i]);
var numbers = [1, 5, 8, 9];
numbers.forEach(function (val, i) { console.log(val + " " + i); });
/*
Union Types:
Union types allows us to handle cases where
we don’t know exactly which type a value is, but
we do know it’s one of two or more options.

*/
var u1 = "abc";
u1 = "Test";
var l = u1.length;
u1 = 55;
var u2 = 45;
u2 = u2 * 2;
//type of operator
console.log("typeof: " + typeof u2);
/*A simple generic function that can work
  on multiple types.*/
function generic(x) {
    console.log("x is of type: " + typeof x);
}
generic(4);
generic("ABC");
