// class User {
//     constructor(email, password){
//         this.email = email,
//         this.password = password   // yha pr password set ho rha hai to is point pr setter bhi call ho rha hai
//     }

//     get password(){
//         return this.password.toUpperCase();
//     }

//     set password(value){  
//         this.password = value;
//     }

// }

// const userOne = new User("seema@gmail.com", "111abc2");
// console.log(userOne.password);  // maximum call stack size exceeded error bhi dega


class User {
    constructor(email, password){
        this.email = email,
        this.password = password   
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
         this._email = value;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){  
        this._password = value;
    }

}

const userOne = new User("seema@gmail.com", "111abc2");
console.log(userOne.password);
console.log(userOne.email);
console.log(userOne); 

//Getter/Setter aise special methods hain
//jo property jaise dikhte hain lekin actually function hote hain 
// — jab property READ karo tab get chalta hai, aur jab property SET (assign) karo tab set chalta hai 
// — isse validation, transformation, ya computed values jaise powerful features possible hote hain.