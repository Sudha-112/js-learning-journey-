const user = 0n;

if(user){
    console.log("Got the user");
}else{
    console.log("Don't get the user");
}

//falsy values

//  false , 0, -0, BigInt 0n , "", null, undefined

//truthy values

// true, [], "0", 'false', {}, function(){}

const emptyObject = {};

if(Object.keys(emptyObject).length === 0){
    console.log("The object is empty");
}

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5??10
// val1 = null??10
// val1 = undefined??16
val1 = null??10??20

console.log(val1);

// ternary operator

//condtion ? true : false

const iceTeaPrice = 20;
iceTeaPrice > 80 ? console.log("greater than 80") : console.log("less than 80")