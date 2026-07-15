let a = 300;  // global scope

if(true){
let a = 10;
const b = 20;
console.log("Inner : ", a);  //block scope  o/p = 10
}

console.log(a); //  o/p = 300
// console.log(b);
