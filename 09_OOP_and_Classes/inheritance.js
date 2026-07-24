class User{
    constructor(username){
        this.username = username;
}
    
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

}

const userOne = new User("sudha");
console.log(userOne);
console.log(userOne.logMe());

class Teacher extends User{
   
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher = new Teacher("sudha", "gmail.com", "1234");
console.log(teacher);
console.log(teacher.logMe());
console.log(teacher.addCourse());
console.log(teacher instanceof User); 