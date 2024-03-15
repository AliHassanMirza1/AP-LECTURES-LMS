// function addr(str:string){
//     console.log(str);
// }

// addr("Hello");

const hellowo=(n:string,m:string):string=>{
    return n+" "+m;
}

console.log(hellowo("Hello","Kilo"));

function fr(g:(n:string,m:string)=>string): number{
    console.log("Hello : ",g("wow","now"));
    return 1
}

fr(hellowo);

let numser: string[]=["hello","bellow","nellow","kellow"]
const mapped = (g:(m:string)=>string,array:string[])=>{
    let arr:string[]=[]
    for(let i=0;i<array.length;i++)
    {
        arr.push(g(array[i]));
    }
    return arr;
}


let result_final = mapped((n: string) : string => {return n+" Hello";} , numser);

console.log(result_final);

