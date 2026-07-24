function makeFunc(){
    const name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();  // displayName func ke saath saath uska lexical scope bhi return hoga
myFunc();