
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

let n: number = 100;
console.log("n: " + n);

let m = 500;

let address: string;
address = "Lahore"
console.log(address);
const addressLength = address.length;

let temp = "ABCD"; //type inference
console.log("temp : " + temp);


let temp2; //If type cannot be inferred, it would be any
temp2 = "ABCD";
console.log("temp2: ", temp2)
temp2 = 45;

let b: boolean;

const x: number = 10;

function helloWorld1() {

    console.log("Hello World-1");

}
helloWorld1();

const hello2 = function hello2(msg: string) {
    //console.log("Hello " + msg);
    console.log(`Hello  ${msg}`);

}

hello2("Type Script-2");

const hello3 = (msg : string) => {

    console.log("Hello " + msg);

}
hello3("TypeScript-3");

const add = (n: number, m:number) : number => {

    return n + m;

}

console.log(add(5,7));


//Variables of function types. 

let addFun: (n: number, m:number) => number;

addFun = add;


console.log(addFun(6,10));

//Passing functions as parameters.
function f (g : ((n: number, m:number) => number) ) {

        
        console.log("Function f: " + g(4, 9));
        return "abcd";

}

console.log(f(add));

const sqr = (n: number): number => { return n * n;}

let nums: number[] = [1, 5, 8, 9];

const map = 
    (g : ((n: number) => number), data : number[]) : number[] => 
    {   
        let output : number[] = [];
        for(let i = 0; i < data.length; i++)
            output.push(g(data[i]));

        return output;
    }

let arr: number[] = [4,5,10];

let result = map((n: number) : number => {return n*2;} , arr);

for(let i = 0; i < result.length; i++)
    console.log(result[i]);

let numbers: number[] = [1, 5, 8, 9];

numbers.forEach(  
    (val:number, i: number) => {console.log(val + " " + i);}

);

/*
Union Types:
Union types allows us to handle cases where 
we don’t know exactly which type a value is, but 
we do know it’s one of two or more options.

*/

let u1 : string | number = "abc";
u1 = "Test";

let l = u1.length;
u1 = 55;

let u2: string | number = 45
u2 = u2 * 2;


//type of operator

console.log("typeof: " + typeof u2);

/*A simple generic function that can work 
  on multiple types.*/

function generic<T> (x : T): void {

    console.log("x is of type: " + typeof x);
}

generic(4);
generic("ABC");
