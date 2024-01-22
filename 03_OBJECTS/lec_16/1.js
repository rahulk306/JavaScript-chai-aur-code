// singleton -> constructor se object bnate hai to singleton bnta hai, literals se nhi bhta hai

// object literals
const mySym = Symbol("key1")
const user = {
    name:"rittik",
    "full name" : "rittik prasad",
    [mySym] : "key1",
    age:33,
    location:"kolkata",
    lastLoginDays:["monday","saturday"]
}

// console.log(user["name"]);  // ye shi tarika hai object ke keys ko access krne ka
// console.log(user["full name"]);
// console.log(user[mySym])
// console.log(typeof user.mySym) // here type of symbol mySym will show string if in object we defined mySym:"key1" -> imporved -> [mySym]:"key1" -> now this will show typeof -> undefined.

// console.log(user);
// user.age = 66
// console.log(user);
// Object.freeze(user) // it freezes the object means further there wont be any change in the items
// user.name = "prasad"
// console.log(user);

// function 
user.greeting = function(){
    console.log(`hello user`);
}

console.log(user.greeting());

user.greeting2 = function(){
    console.log(`hello, ${this.name}`);
}
console.log(user.greeting2());
console.log(user["greeting2"]());