function makeFunc(){
    const name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();  // displayName func ke saath saath uska lexical scope bhi return hoga
myFunc();   // isme return hua displayNAme func  plus name variable bhi aata hai

//Closure ka matlab hai — ek function apne "birth place" 
// (jahan wo define hua tha) ke variables ko hamesha ke liye yaad rakh leta hai, chahe wo outer function khatam ho jaaye —
//  kyunki function apne saath uska lexical scope bhi carry karta hai.