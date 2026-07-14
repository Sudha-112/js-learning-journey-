const today = new Date();
console.log(typeof today); // object
console.log(today);
console.log(today.toDateString());
console.log(today.toLocaleString());

// let myDate = new Date(2026, 0, 14);
// myDate = new Date("2026-01-14");
// myDate = new Date("7-14-2026");
let myDate = new Date("07-14-2026");
console.log(myDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);  // ans is in milliseconds
// console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000)); // ans will be in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

