// Stack(Primitive) 

// All variables are declared in the stack

let myYoutubeName = "sudhapalyal.com";

let anotherName = myYoutubeName;
anotherName = "sudha.com";

console.log(myYoutubeName);
console.log(anotherName);

// Heap (Non-Primitive)

let userOne = {
    name : "Sudha",
    email : "sudha@gmail.com"
}

let userTwo = userOne;

 userTwo.email = "sudhapalyal@gmail.com";

 console.log(userOne.email);
 console.log(userTwo.email);


