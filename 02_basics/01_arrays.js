//array

const myArr = [0,1,2,3,4,5];
const myHeroes = ["shaktiman", "naagraj"];

const myArr2 = new Array(1,2,3,4);
console.log(typeof myArr);   // object
console.log(typeof myArr2);  // object

console.log(myArr2[3]);

//Array methods

myArr.push(6); // push at the end
myArr.pop();   // pop from the end
myArr.unshift(9); // push at the first
myArr.shift(); // pop from the first

console.log(myArr.includes(4));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(myArr);
console.log(typeof newArr);  // string

// slice and splice

const arr = [1,2,3,4,5];
console.log("A", arr);

const myn1 = arr.slice(1,3); // slice does not include last index
console.log(myn1);
console.log("B", arr); // slice operation don't change the original array

const myn2 = arr.splice(1,3); // splice includes last index too
console.log(myn2);
console.log("C", arr); // splice change the original array