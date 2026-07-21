const user = {
    username: "sudha",
    loginCount: 8,
    signedIn: true,

    getUserDetails : function(){
        // console.log("Got user details from DB");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(this);
// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
     this.username = username;
     this.loginCount = loginCount;
     this.isLoggedIn = isLoggedIn;

     this.greeting = function(){
        console.log(`Welcome ${this.username}`);
     }
     return this;
}

const userOne = new User("sudha", 10, true);
const userTwo = new User("Swati", 11, false);
console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

const auto = new Car("Honda", "Accord", 1998);
console.log(auto instanceof Car);
console.log(auto instanceof Object);
