/*
Questions:

    What is the purpose of Await and how does it 
    affect execution of a program?

    How can a chain of promises be built and 
    what happens when one of the promises in 
    the chain is rejected?

  


*/

/*
Installations
 npm install -g axios
 npm install -g json-server
 Start JSON Server: json-server --watch animals.json   

Topics covered:   
    Promises
    async/await
    JSON parsing
    Promise.all
    Promise.allSettled

*/

import axios from 'axios';


class Food {

    likes: string[];
    dislikes: string[];
    constructor(l: string[], d: string[]){
        this.likes = [...l];
        this.dislikes = [...d];
    }
}

class Animal {
    name : string;
    species: string;
    foods: Food;
    constructor(n: string, s: string, f: Food){
        this.name = n;
        this.species = s;
        this.foods = f;
    }
}

class AllAnimals {
    animals: Animal[];
    constructor(a?: Animal[]){
        //this.animals = [...a];
        this.animals = a? [...a] : [];
    }

}



function downloadUsingPromises(url:string) {

            axios.get(url)
                 .then((res)=>
                    { 
                        let all: AllAnimals = new AllAnimals(JSON.parse(JSON.stringify(res.data)))
                        printAninmals(all);
                    }
                 ).catch((error)=>console.log(error));
}

async function downloadUsingAsyncAwait(url:string){

    try{
        let res = await axios.get(url);
        let all: AllAnimals = new AllAnimals(JSON.parse(JSON.stringify(res.data)))
        printAninmals(all);
        console.log("downloadAsyncAwait: After Await" );
    }
    catch(error) {
        console.log(error);
    } finally {
        console.log("downloadAsyncAwait: Finally block")
    }

}

async function manyPromises(urls: string[]) {
    try{
        const download = (url:string) => axios.get(url);
        let promises = urls.map(download);
        let responseList = await Promise.all(promises);
        responseList.forEach((res)=> {
            console.log("Status: "+ res.status + " , Status Text: " + res.statusText);
        });
    } catch(error){
            console.log(error);
}
}

async function manySettledPromises(urls: string[]) {
    try{
        const download = (url:string) => axios.get(url);
        let promises = urls.map(download);
        promises.map((p)=>
            { p.then((res)=>console.log("RESOLVED"))
                .catch((err)=>console.log("ERROR"));
            });
        //promises.map((p)=>p.catch((err)=>console.log(err)));

        
        let responseList = await Promise.allSettled(promises);
        responseList.forEach((res)=> {
            console.log("Status: "+ res.status);
        });
    } catch(error){
            console.log(error);
}
}


function printAninmals(allAnimals: AllAnimals){

    if(allAnimals.animals.length == 0){
        console.log("No animals found");
        return;
    }
    allAnimals.animals.forEach((a)=>
        console.log(a));

}

let url:string = "http://localhost:3000/animals";
//downloadUsingAsyncAwait(url);
//downloadUsingPromises(url);

let urls:string[] = [
    "http://www.lums.edu.pk",
    "http://github.com1",
    "http://google.com"
];

//manyPromises(urls);
manySettledPromises(urls);
console.log("End of file");



