/*
    -Synchronus vs Asynchronus programming.
    -JavaScript event loop
    -Function call stack
    -Data storage on heap
    -Callbacks in message queue

    1.JavaScript is single threaded,i.e.,there is a
     single main thread on which JavaScript 
     code executes.
    
    2.The JavaScript engine executes the code 
       starting from the top of the file and 
       working its way down to the end of the file. 
    2.1 During the execution, it creates the 
    required execution contexts, and  pushes 
    and pops functions (activation records) 
    onto and off the call stack. 
    2.2 If a JavaScript function takes a long time
     to execute (called a blocking function), a 
     user cannot interact (mouse clicks etc.) 
     with the web browser during the function’s 
     execution. 
     Blocking function examples
     -Call to remote API.
    2.3. JavaScript host environments such as 
         web browsers and Node.js are multithreaded.

    3. JavaScript event loop
    3.1 All async function calls are sent to 
        browser APIs swhich start the operation 
        on a separate thread.
    3.2 When an async operation is complete, its 
       corresponding callback function is placed 
       in the Callback(Message) Queue.
    3.3 The event loop continuously checks the 
        call stack and the callback queue. Whenever, 
        the call stack is empty, it takes the first 
        function from the callback queue and pushes 
        it onto the call stack for execution, and repeats
        this process for each message in the queue.
        
*/

const longRunningTask = (msg: string) =>{

    console.log("Start:Long running task on main thread")
    let counter: number = 10000000000;
    while(counter > 0)
        counter--;

    console.log(msg);
    console.log("End:Long running task on main thread")

}
//longRunningTask("Hello World!");

function f(msg: string) { 
    console.log("f(): Before call to setTimeout: " + msg);
    setTimeout(
        ()=> {
            console.log("f(): Inside the callback function");}
        ,
        0);
    
    console.log("f(): After call to setTimeout: " + msg);
}

function g(msg: string) { 
    console.log("g(): Before call to setTimeout: " + msg);
    setTimeout(
        ()=> {console.log("g(): Inside the callback function");}
        ,
        0);
    
    console.log("g(): After call to setTimeout: " + msg);
}


console.log("Before call to f()");
f("Hello World!");
console.log("After call to f()-1");
console.log("After call to f()-2");
console.log("After call to f()-3");
g("Welcome");
//longRunningTask("Hello World!");
