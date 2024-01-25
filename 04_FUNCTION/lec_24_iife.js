// Immediate Invoked Function Expression (IIFE)
// global pollution se bachne ke leye iife ka use krte hai

(function chai() {
    // named iife
    console.log("prasad");
})();

// () -> braces ke andr function likhenge aur call krne ke leye ek aur braces lga denge aur semicolon se end krna pdta hai

( (name) => {
    console.log(`${name} welcome`);
} )('raushan')

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN (not a number) 
// excep these all are treated as true values