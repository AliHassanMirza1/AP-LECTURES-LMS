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

function gmap2<T1,T2> (
    f: (n:T1) => T2, data: T1[]) : T2[]{

    let output : T2[] = [];
    for(let i = 0; i < data.length; i++)
        output.push(f(data[i]));
    return output;

} 


let s=(n:number):string=>{if(n==1) return "Kilo";else return "NILO"};
let a:number[]=[1,1,2,3,4,5];
let inn=gmap2(s,a);
console.log(...inn);


// function fmap1 (
//     f: (n:number) => number, data: number[]) : number[]{

//     let output : number[] = [];
//     for(let i = 0; i < data.length; i++)
//         output.push(f(data[i]));
//     return output;

// } 


// let values1: number[] = [1,5,10];
// let g1 = (n: number) : number => { return n*2;}
// let arr_1: number[] = fmap1(g1, values1);
// console.log("arr_1", ...arr_1);

// function fmap2<T1,T2> (
//     f: (n:T1) => T2, data: T1[]) : T2[]{

//     let output : T2[] = [];
//     for(let i = 0; i < data.length; i++)
//         output.push(f(data[i]));
//     return output;

// } 


// let values2: number[] = [1,5,10];
// //let g1 = (n: number) : number => { return n*2;}
// let g2 = (n: number) : number => { return n+5;}
// let arr_2: number[] = fmap2(g2, values2);
// console.log("arr_2", ...arr_2);

// let values3: string[] = ["A","B","Z"];
// let g3 = (n: string) : number => { if (n == "A") return 1; else return 0;}
// let arr_3 = fmap2(g3, values3);
// console.log("arr_3", ...arr_3);


// function apply<T1,T2> (
//     f: ((n:T1) => T2)[], data: T1[]) : T2[]{

//     let output : T2[] = [];
//     for(let j = 0; j < f.length; j++)
//      for(let i = 0; i < data.length; i++)
//         output.push(f[j](data[i]));
//     return output;

// } 

// let values4: number[] = [5,9,11];
// let g4 = (n: number) : number => { return n*n;}
// let g5 = (n: number) : number => { return n*n+5;}

// let arr_4 = apply([g4,g5], values4);
// console.log("arr_4", ...arr_4);


// function monad<T1,T2> (
//     f: ((n:T1) => T2[]), data: T1[]) : T2[]{

//     let output : T2[] = [];
//      for(let i = 0; i < data.length; i++)
//         output.push(f(data[i])[0]);
//     return output;

// } 

// let values5: number[] = [5,9,11];
// let m1 = (n: number) : number[] => { return [n*n];}
// let m2 = (n: number) : number[] => { return [n*n+5];}

// let arr_5 = monad(m2, monad(m1, values5)); //f(g(x))
// console.log("arr_5", ...arr_5);


// class MyList<T1> {
//     private data : T1[] = [];
//     constructor(arr : T1[]) {
//         this.data = arr;
//         //this.data = this.data.concat(arr);
//     }

//     fmap<T2> (
//         f: (n:T1) => T2) : MyList<T2>{

//         let output : T2[] = [];
//         for(let i = 0; i < this.data.length; i++)
//             output.push(f(this.data[i]));
//         return new MyList<T2>(output);
//     }  
    
//     apply<T2> (
//         f: ((n:T1) => T2)[]) : MyList<T2>{
    
//         let output : T2[] = [];
//         for(let j = 0; j < f.length; j++)
//          for(let i = 0; i < this.data.length; i++)
//             output.push(f[j](this.data[i]));
//         return new MyList(output);
    
//     } 

//     monad<T2> (
//         f: ((n:T1) => T2[])) : MyList<T2>{
    
//         let output : T2[] = [];
//          for(let i = 0; i < this.data.length; i++)
//             output.push(f(this.data[i])[0]);
//         return new MyList(output);
    
//     } 

// }

// let list1 = new MyList<number>([1,4,10]);
// let list2 = list1.fmap((n:number):number => {return n * n;});
// console.log("list1: ", list1);
// console.log("list2: ", list2);
// let h1 = (n:number):number => {return n * n;}
// let h2 = (n:number):number => {return n * 3;}
// console.log("Chain fmap: ", list1.fmap(h1).fmap(h2).fmap(h1));

// console.log("apply:" , list1.apply([h1,h2]));

// console.log("monad: ", list1.monad(m1).monad(m2));


