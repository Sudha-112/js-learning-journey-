function setUsername(username){
    // complex DB calls
    console.log(this);
    this.username = username; 
    console.log("called");
}

function createUser(username ,email, password){
    setUsername.call(this, username);  // call = helps to pass current context to the other function

    this.email = email;
    this.password = password;
}

const chai = new createUser("sudha", "sudha@gmail.com", "123");
console.log(chai);

// this = refers to the current context 