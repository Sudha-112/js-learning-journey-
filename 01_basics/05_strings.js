const name = "sudha";
const repoCount = 50;

console.log(`My name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('sudhapalyal');
console.log(typeof gameName); // object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);  

console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

//Strings are immutable in js and string methods return new string,
// they don't change the original string

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-11);
console.log(anotherString);

const newStringOne = "   sudha   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sudha.com/sudha%5palyal";

console.log(url.replace('%5', '_'));
console.log(url.includes('sudha'));

const str = "I am a software engineer";
console.log(str.split(' '));  // returns array