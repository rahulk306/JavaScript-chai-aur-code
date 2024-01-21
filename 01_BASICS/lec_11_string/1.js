const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "value"); -> ye thora outdated tarika hai likhne ka

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // ye nya tarika hai likhne me readable lgta hai -> isko stiring interpolation kehte hai

const gameName = new String('rittik'); 

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('t'));

const newStirng = gameName.substring(0,3)
console.log(newStirng);

console.log(gameName.slice(2,5));

const newStirngtwo = "  rittik  "
console.log(newStirngtwo)
console.log(newStirngtwo.trim())

const url = "https://rittik.com/hitesh%20choudhry"
console.log(url);
console.log(url.replace('%20','-'))
console.log(url.includes('rittik'));
