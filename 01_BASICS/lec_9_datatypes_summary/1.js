// primitive -> call by value hota hai jb kbhi bhi inko copy keya jata hai -> static allocation hota hai -> stack

// 7 types : String, Number, Boolean, null, undefined(variable declared hai but value kon sa dalna hai ye decided nhi hai), Symbol(value ko unique bnane ke leye use krte hai), BigInt(bade data to hold krne ke leye use krte hai)

// Reference (Non primitive) -> dynamic allocation hota hai -> heap

// Array, Objects, Functions

// const id = Symbol('123')
// console.log(id)
// const id2 = Symbol('123')
// console.log(id === id2) // false 

// const bigNumber = 1234n
// console.log(bigNumber)

const heros = ["shaktiman", "naagraj", "doga"]
// console.log(heros)
let myObj = {
    name:"rittik",
    age:55,
}
console.log(myObj)