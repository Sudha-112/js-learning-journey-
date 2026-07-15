const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // spread operator ...
console.log(all_new_heros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_anotherArr = anotherArr.flat(Infinity);
console.log(real_anotherArr);

console.log(Array.isArray("Sudha"));
console.log(Array.from("Sudha"));
console.log(Array.from({name : "Sudha"}));  // interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));