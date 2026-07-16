let a = 300;  // global scope

if(true){
let a = 10;
const b = 20;
console.log("Inner : ", a);  //block scope  o/p = 10
}

console.log(a); //  o/p = 300
// console.log(b);

//Nested scope

function one(){
    const username = "sudha";

    function two(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);  // error

    two();
}

one();

//  interesting

console.log(addone(5));

function addone(num){
    return num + 1;
}


const addTwo = function(num){
    return num + 1;
}

console.log(addTwo(7));