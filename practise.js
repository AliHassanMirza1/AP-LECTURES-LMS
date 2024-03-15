// function addr(str:string){
//     console.log(str);
// }
// addr("Hello");
var hellowo = function (n, m) {
    return n + " " + m;
};
console.log(hellowo("Hello", "Kilo"));
function fr(g) {
    console.log("Hello : ", g("wow", "now"));
    return 1;
}
fr(hellowo);
var numser = ["hello", "bellow", "nellow", "kellow"];
var mapped = function (g, array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        arr.push(g(array[i]));
    }
    return arr;
};
var result_final = mapped(function (n) { return n + " Hello"; }, numser);
console.log(result_final);
