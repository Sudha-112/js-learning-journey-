// // Class

// class User{
//     constructor(username, email, password){   // constructor
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){    // method
//        return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const userOne = new User("sudha", "sudha@gmail.com", "123");
// console.log(userOne);
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUsername());

//behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return`${this.username.toUpperCase()}`;
}

const userTwo = new User("sudha", "sudha12@gmail.com", "123");

console.log(userTwo);
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());