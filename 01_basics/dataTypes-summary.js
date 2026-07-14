// Primitive

// 7 types : String, Number , Boolean, null,
//  undefined, Symbol, BigInt 
//null : completely empty

const id = Symbol('123');  // Symbol gives unique value
const anotherId = Symbol('123');

console.log(id === anotherId);
const bigNumber = 3456727856757867n;


//Reference (Non primitive)

//Array, Objects, Functions
// All these non primitive types return typeof Object

const heros = ["shaktimaan", "naagraj", "doga"];

let myObj = {
    name : "sneha",
    age : 23
}

const myFunction = function (){
    console.log("Hello world");
}

console.log(typeof (bigNumber)); // bigInt
console.log(typeof id); // symbol
console.log(typeof myFunction); // function
console.log(typeof heros); // object
console.log(typeof myObj);  // object



