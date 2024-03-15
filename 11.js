/*
The content (code) discussed in this lecture cover
the concepts of functors, applicatives and monads
in the context of Typescript. However, not everything
has strictly been enforced as is done in Haskell.

Functors, Applicatives, Monads in Typescript

A functor applies a function to a wrapped value
An Applicative applies a wrapped function to a wrapped value
A Monad applies a "function that returns a wrapped value"
to a wrapped value

*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
Class participation questions:

Class#1: Code the fmap2 function.

Class#2: How is the  applictative (apply) function
different from applicative (apply function in MyList class)?

*/
function fmap1(f, data) {
    var output = [];
    for (var i = 0; i < data.length; i++)
        output.push(f(data[i]));
    return output;
}
var values1 = [1, 5, 10];
var g1 = function (n) { return n * 2; };
var arr_1 = fmap1(g1, values1);
console.log.apply(console, __spreadArray(["arr_1"], arr_1, false));
function fmap2(f, data) {
    var output = [];
    for (var i = 0; i < data.length; i++)
        output.push(f(data[i]));
    return output;
}
var values2 = [1, 5, 10];
//let g1 = (n: number) : number => { return n*2;}
var g2 = function (n) { return n + 5; };
var arr_2 = fmap2(g2, values2);
console.log.apply(console, __spreadArray(["arr_2"], arr_2, false));
var values3 = ["A", "B", "Z"];
var g3 = function (n) { if (n == "A")
    return 1;
else
    return 0; };
var arr_3 = fmap2(g3, values3);
console.log.apply(console, __spreadArray(["arr_3"], arr_3, false));
function apply(f, data) {
    var output = [];
    for (var j = 0; j < f.length; j++)
        for (var i = 0; i < data.length; i++)
            output.push(f[j](data[i]));
    return output;
}
var values4 = [5, 9, 11];
var g4 = function (n) { return n * n; };
var g5 = function (n) { return n * n + 5; };
var arr_4 = apply([g4, g5], values4);
console.log.apply(console, __spreadArray(["arr_4"], arr_4, false));
function monad(f, data) {
    var output = [];
    for (var i = 0; i < data.length; i++)
        output.push(f(data[i])[0]);
    return output;
}
var values5 = [5, 9, 11];
var m1 = function (n) { return [n * n]; };
var m2 = function (n) { return [n * n + 5]; };
var arr_5 = monad(m2, monad(m1, values5)); //f(g(x))
console.log.apply(//f(g(x))
console, __spreadArray(["arr_5"], arr_5, false));
var MyList = /** @class */ (function () {
    function MyList(arr) {
        this.data = [];
        this.data = arr;
        //this.data = this.data.concat(arr);
    }
    MyList.prototype.fmap = function (f) {
        var output = [];
        for (var i = 0; i < this.data.length; i++)
            output.push(f(this.data[i]));
        return new MyList(output);
    };
    MyList.prototype.apply = function (f) {
        var output = [];
        for (var j = 0; j < f.length; j++)
            for (var i = 0; i < this.data.length; i++)
                output.push(f[j](this.data[i]));
        return new MyList(output);
    };
    MyList.prototype.monad = function (f) {
        var output = [];
        for (var i = 0; i < this.data.length; i++)
            output.push(f(this.data[i])[0]);
        return new MyList(output);
    };
    return MyList;
}());
var list1 = new MyList([1, 4, 10]);
var list2 = list1.fmap(function (n) { return n * n; });
console.log("list1: ", list1);
console.log("list2: ", list2);
var h1 = function (n) { return n * n; };
var h2 = function (n) { return n * 3; };
console.log("Chain fmap: ", list1.fmap(h1).fmap(h2).fmap(h1));
console.log("apply:", list1.apply([h1, h2]));
console.log("monad: ", list1.monad(m1).monad(m2));
