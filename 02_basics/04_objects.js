// const tinderUser = new Object();  declare object using constructor

const tinderUser = {};
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullName: {
        userfullName:{
            firstName: "Sam",
            lastName: "Pal"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName.userfullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
// const obj3 = Object.assign(obj1,obj2); means assigning obj2 in obj1 thus changing obj 1
// const obj3 = Object.assign({}, obj1, obj2); // assign elements of obj1 and obj2 into {} without changing existing objects

const obj3 = {...obj1, ...obj2}; // spread operator ... used here
console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));// return type is array (array of keys)
console.log(Object.values(tinderUser)); //return array of values
console.log(Object.entries(tinderUser)); // return array of entries


console.log(tinderUser.hasOwnProperty("isLoggedIn"));  // true

//object de-structure

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor);

const {courseInstructor: Instructor} = course; // object de-structure
console.log(Instructor);

//API JSON


//JSON format

// {
//    "name": "hitesh",
//    "courseName": "js in hindi", 
//    "price": "free" 
// }

