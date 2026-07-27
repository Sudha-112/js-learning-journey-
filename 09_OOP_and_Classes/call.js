function setUsername(username){
    // complex DB calls
    console.log(this);
    this.username = username; 
    console.log("called");
}

function createUser(username ,email, password){
    console.log(this);
    setUsername.call(this, username);  // call = helps to pass current context to the other function

    this.email = email;
    this.password = password;
}

const chai = new createUser("sudha", "sudha@gmail.com", "123");
console.log(chai);

// this = refers to the current context 
//call() = ek method hai jo function ko turant execute karta hai, 
// saath hi this ki value manually set karne deta hai — bind() ke opposite,
//  jo sirf naya function banata hai bina turant chalaye.
