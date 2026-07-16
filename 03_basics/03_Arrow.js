const user = {
    username: "sudha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this); // current context
    } 

}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();
console.log(this); // {}

// In browser, if we write console.log(this) we'll get window(global)

// function code(){
//     let username = "sudha";
//     console.log(this.username);  // undefined
// }

//  code();

// const code = function (){
//     let username = "sudha";
//     console.log(this.username);  // undefined
// }

// code();

// Arrow functions

const code = () => {
    let username = "sudha";
    console.log(this.username);  // undefined
    console.log(this); // {}
}

code();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);  // implicit return

const addTwo = (num1, num2) => ({username: "sudha"});
console.log(addTwo(3,4));

const myArray = [2, 5, 3, 7];

myArray.forEach(() => {});

