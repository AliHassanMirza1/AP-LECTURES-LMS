
/* 
Question for the class at 9:00am 

What do you understand from the term "JavaScript event loop"?
Start: 9:04
End: 9:07am
*/

/*
Question for the class at 11:30am 
What is the purpose of the "Message queue" in
JavaScript event loop?

Start: 11:35.
End: 11:38am
*/


/*
   1. A Promise is an object that represents the 
   eventual completion (success) or failure of an
   asynchronous operation.
   2. You can attach callback functions to to promise
     object using then method.
   3. Promises offer better readability and error
      handling over traditional callbacks. Promises
      also make it management of complex asynchronous 
      workflows.

      /* 
        Associating handlers with a promise using then()
        Promise states: 
         (1) Pending
         (2) Settled/Resolved: 
             (a) Fulfilled (b) Rejected 
        */



function download(url: string) {
    let p1 =  new Promise(
        //executor function
        (resolve, reject) => {

            console.log("Start: Inside the executor function");
            //setTimeout(()=>console.log("setTimeout"), 3000);
            //code for downloading a file etc. 
            
            setTimeout(()=>{
                console.log("setTimeout");
                let r: number = Math.floor(Math.random()*100);
                if(r%2 == 0)
                    resolve(r);
                else
                    reject(r);


            }, 3000);
            
            
        }
    );
    return p1;
}

  let p1 = download("http://www.google.com");

  /*p1.then((v) => { console.log("Resolved: " + v);}
         ,
         (e) => { console.log("Rejected:" + e);}
    );

   p1.then((v) => { console.log("Then2 Resolved: " + v);}
         ,
         (e) => { console.log("Then2 Rejected:" + e);});
*/


//console.log("End of the file");

p1.then((v) => { console.log("Resolved: " + v);})
  .catch((e) => { console.log("Rejected:" + e);})
  .finally(() => {console.log("finally block");});
        
         




