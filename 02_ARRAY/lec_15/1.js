// const marvel_heros = ["spiderman","thor", "Ironman"]
// const dc_heros = ["batman","flash","superman"]

// // spread operator
// const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

// const another_array = [1,2,3,[1,2,3],6,[2,6,[6,7]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array );


console.log(Array.isArray("rittik"))
console.log(Array.from("rittik"))
console.log(Array.from({name:"rittik"})) // it will give empty array as it needs to be specified whether using key or value array need to be created.

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));