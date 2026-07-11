// console.log(2 >= 1);
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0);  // true

/* the reason is that an equality check == 
 and comparisons > < >= <= work differently.
 Comparisons convert null to a number , treating it as 0.
 */


// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false
// console.log(undefined > 0);  //false

// === strict check (it checks values and their datatypes too)

console.log("2" === 2);