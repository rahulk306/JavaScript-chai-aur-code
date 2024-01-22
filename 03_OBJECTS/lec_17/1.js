const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = {...obj1, ...obj2} // spread operator use to combine two or more objects 
console.log(obj3);

const one  = {
    name:"rittik",
    kamar:32,
    lambai:3
}

const two = {
    name:"prasad",
    size:{
        upar:36,
        neeche:32,
        beech:24
    }
}

console.log(two);
console.log(two.size.beech)

// console.log(Object.keys(one));
// console.log(Object.values(one));
// console.log(one.hasOwnProperty("kamar"));