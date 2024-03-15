/* 
  Topics covered:
    -Traditional callbacks for asynchronous functions
    -Promisification
    -Promise chaining
    -async/await


*/

import fs from 'fs';
import {promisify} from 'util';


/*Reading a file synchronously 

let fileContent = fs.readFileSync("data.txt");
console.log(String(fileContent));
*/

/*Reading a file Asynchronously 

fs.readFile("data.txt", (err, data)=> {
        if(err)
            console.log(err);
        else
            console.log(String(data));

});

*/

/* 
Promisification is conversion of a function that 
takes a callback into a function that returns
a promise.

A function to promisify fs.readFile */
/*
const promisedReadFile = (fileName: string) => {

   let p =  new Promise((resolve, reject)=> {

        fs.readFile(fileName, (err, data)=> {
            if(err){
                console.log(err);
                reject(err);
            }
            else{
                console.log("Inside executor: " + String(data));
                resolve(String(data));
            }
    });
});
    console.log("Before returning promisedReadFile()")
    return p;
}

let p1 = promisedReadFile("data.txt");
p1.then((data)=>console.log("Then: " + data))
  .catch((err)=> console.log(err))
  .finally(()=>console.log("File read: finally"));
console.log("End of file");
*/

/*
Promisification using a library function.

/*
const promisifiedReadFile = promisify(fs.readFile)
let p2 = promisifiedReadFile("data.txt");
p2.then((data)=>console.log("Then: " + data))
  .catch((err)=> console.log(err))
  .finally(()=>console.log("File read: finally"));



const promisifiedWriteFile = promisify(fs.writeFile)
let p3 = promisifiedWriteFile("written2.txt", "ABCDE FGH");
p3.then(()=>console.log("Then1: Writing file"))
  .catch((err)=> console.log(err))
  .finally(()=>console.log("File write: finally"));

p3.then(()=>console.log("Then2: Writing file"));  
console.log("End of file");*/

/* Promise  chaining */

/*
let p5 = new Promise<number[]>(
    (resolve, reject)=> {
        resolve([4, 10, 13]);
});

Promise.then returns a promise which is 
  already resolved. */
/*
p5.then(
    (data: number[])=> {
        console.log("Then1: ", data);
        //return 5;
        //return Promise.resolve(5);
        //return Promise.reject("ERRORS");
    return data.map((value: number, index: number)=>value*2)
    })
    .then((data)=> {
        console.log("Then2: ", data);
        return data.map((value: number, index: number)=>value+10)

    })
    .then((data)=> {
        console.log("Then3: ", data);
        return 500;
    })
    .catch((error)=> {console.log(error); return 1000;})
    .then((data)=>console.log("After catch: " + data));

    */

/*"async" and "await" are keywords
 -A function with async prefixed to 
  its name will always return a promise
 -"await" can only be used inside 
  an "async" function
    */

const promisifiedReadFile = promisify(fs.readFile)

   async function f() {
        console.log("Inside f()");
        let fileContent = await promisifiedReadFile("data.txt");

        console.log("Before returning promisedReadFile");
        return 5;
    }

    let p6 = f();
    p6.then((data)=> console.log("f(): " + data));
    console.log(p6);
    console.log("End of file");

   