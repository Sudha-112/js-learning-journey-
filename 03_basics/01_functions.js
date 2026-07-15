function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("H");
    console.log("A");
}

//sayMyName  // this is the reference of the function
sayMyName();  //this is evoking the function

function addTwoNumbers(number1, number2){
    //let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result  = addTwoNumbers(3,5);
console.log(`Result: ${result}`);

function loginUserMessage(username = "Sam"){
    if(!username){
      console.log("Please enter the username");
      return;
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("Sudha"));
console.log(loginUserMessage());  // undefined just logged in

function calculateCartPrice(val1, val2, ...num1){  // rest operator
    return num1;
}

console.log(calculateCartPrice(100,200,300,400)); // return array

const user = {
    username: "sudha",
    price: 199
}

function handleObject(anyObject){
   console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

handleObject(user);

function add(num1, num2){
    console.log(num1 + num2);
}
add(1,2);