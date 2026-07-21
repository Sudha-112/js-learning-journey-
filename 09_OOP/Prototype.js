let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sudha = function(){
    console.log("sudha is present in all objects");
}

heroPower.sudha();
myHeros.sudha();

Array.prototype.heySudha = function(){
    console.log(`sudha says hello`);
}

myHeros.heySudha();  // it has access
// heroPower.heySudha();  //it does not has access

// inheritance

const User = {
     name: "sudha",
     email: "sudha@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User;

console.log(Teacher.email);  //sudha@gmail.com

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);// TeachingSupport access all properties of Teacher

let anotherUsername = "sudha    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);//this = jisne call kiya
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength(); 
"hitesh".trueLength();