// Immediately Invoked Function Expressions (IIFE)

// global scope ke pollution se problem hoti hai to usko htane ke liye IIFE use krte hai

(function code(){
    // named IIFE = because function has a name
    console.log(`DB Connected`);
})();


//unamed IIFE
( () => {
    console.log(`DB Connected Two`);
} )();

( (name) => {
    console.log(`DB Connected Three ${name}`);
} )("Sudha");