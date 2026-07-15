// singleton (apne tarah ka ek hi object)
//object .create( constructor se bnana object ko)

// literals se object singleton nhi bnta hai
// constructor se object singleton bn jata hai


//object literals

const mySym = Symbol("key");

const JsUser = {
    name: "Sushma",
    "full-name": "Sushma Prasad",
    [mySym]:"myKey1",
    age: 23,
    location: "Delhi",
    email: "sush@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday", "Sunday"] 
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full-name"]);
console.log(JsUser[mySym]);

JsUser.email = "sushma@gmail.com";
// Object.freeze(JsUser); // no changes will be propagated after this
JsUser["email"] = "sush1223@gmail.com";
console.log(JsUser);

JsUser.greeting1 = function(){
    console.log("Hello Js User");
} 

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
} 

console.log(JsUser.greeting1());
console.log(JsUser.greeting2());