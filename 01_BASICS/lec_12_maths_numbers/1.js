// console.log(Math.random()); // returns value bt (0-1)
// console.log( Math.floor( (Math.random()*10) + 1)); 
// to get a number in range let (min, max)

const min = 1;
const max = 7;

console.log( Math.floor( Math.random() * (max - min + 1)) + min);