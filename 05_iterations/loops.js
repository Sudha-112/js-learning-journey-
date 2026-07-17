//for loop

for(let i = 0; i < 10; i++){
    console.log(i);  
}

//break and continue

// break = it takes out of the current loop

// continue = it jumps to the next iteration 

//while loop

// while(condtion){
//     // do something
// }

// do{
// // do something
// }while(condition);

// for loop = when we know how many times loop will run
// while loop =  when we don't know how many times the loop will run


// High order Array loops

// for of
const arr = [1,2,3,4];

for(const num of arr){
    console.log(num);
}

const name = "sudha";

for(const num of name){
    console.log(num);
}

// Maps

const map = new Map();
map.set('IN', "India");
map.set('Fr', "France");

console.log(map);

for(const [key, value] of map){
    console.log(key + ': ' + value);
}

const myObject = {
     name : "sudha",
     age : 23
}

// for(const [key, value] of myObject){
//     console.log(key + ": " + value);     // object is not iterable using [key, value]
// }