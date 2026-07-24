const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name: "ginger tea",
    price: 200,
    isAvailable: true,

    orderChai: function(){
        console.log(`chai nhi bni`);
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name',{
//     value: 'lemon tea',
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai)){

    if(typeof(value) != 'function'){
        console.log(`${key}: ${value}`);
    }
    
}