let score = "sneha";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn); // boolean
// console.log(booleanIsLoggedIn);   // true

// 1 => true; 0 => false
// "" => false
// "sneha" => true

// console.log("1" + 2);  //12
// console.log(1 + "2");  //12 
// console.log("1" + 2 + 2);  //122
// console.log(1 + 2 + "2");  //32

// console.log((3 + 4) * 5 % 3); //2

// console.log(+true);  //1
// console.log(+"");    //0

let x = 3;
const y = x++;

console.log(`x : ${x}, y : ${y}`);

let a = 4;
const b = ++a;

console.log(`a : ${a}, b : ${b}`);