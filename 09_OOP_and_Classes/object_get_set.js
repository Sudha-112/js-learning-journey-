const User = {
    _email: "sudha.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },
    
    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User); 
console.log(tea); //{}
console.log(tea.email);  //SUDHA.COM

//Object.create(User) ek naya khaali object banata hai jiska prototype User set ho jaata hai
//  — isse tea apne khud ke paas na hote hue bhi User ke properties/methods "borrow" kar sakta hai,
//  prototype chain ke through — 
// aur getter ke andar this hamesha wahi object hota hai jisse asal me call kiya gaya (tea),
//  na ki jahan method likha gaya (User).