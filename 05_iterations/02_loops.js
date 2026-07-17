const coding = ["js", "ruby", "java", "pyhton", "cpp"];

const values = coding.forEach( (item) => {
    console.log(item);
    })

//forEach loop doesn't return anything

console.log(values);  // undefined 

const myNums = [1,2,3,4,5,6,7,8,9,10];

// --------------filter method-------------------------
const newNums = myNums.filter( (num) => num > 4);

console.log(newNums); 

// const newNums1 = [];

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums1.push(num);
//     }
// })
// console.log(newNums1);

const Numbers = [1,2,3,4,5];

// -----------------map method-----------------------------

// const newNums = Numbers.map( (num) => num + 10);
// console.log(newNums);

const newNums1 = Numbers.map( (num) => num * 10 ).map( (num) => num/10 )
                 .filter( (num) => num < 6);

console.log(newNums1);

// -------------------reduce method------------------------------

const arr = [1,2,3,4];

const initialValue = 0;
const sumOfArr = arr.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumOfArr); 