// Numbers

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(2));

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));

// Maths

console.log(Math);
console.log(Math.abs(-4));  // 4
console.log(Math.abs(6));  // 6
console.log(Math.round(9.8));  // 10
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.6));  // 4
console.log(Math.min(2,3,4,5));  // 2
console.log(Math.max(2,3,4,5));  // 5

console.log(Math.random());  // value always lies btween 0 and 1
console.log(Math.floor(Math.random()*10) + 1); // value lies between 1 and 10

// imp concept

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);