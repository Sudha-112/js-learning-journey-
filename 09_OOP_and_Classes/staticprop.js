//static property

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        return `USERNAME : ${this.username}`;
    }

    static createId(){   // static here means access na dena class ke instance/object ko
        return `123`;
    }
}

const userOne = new User("swati");
// console.log(userOne.createId());

class Sudha extends User{
    constructor(username, password){
        super(username);
        this.password = password;
    }

}

const sudha = new Sudha("aman", "111");
console.log(sudha.logMe());
// console.log(sudha.createId());