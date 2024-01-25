// for of loop

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) console.log(num)

// const greeting = "Rittik Prasad"
// for(const greet of greeting) console.log(greet);

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set("Fr", "France")
// map.set('IN', "India")

// console.log(map)

// for(const [key, value] of map) console.log(key, value);

// we can't apply apply this loop for object

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for(const num in myObject) console.log(num, myObject[num]);

// for each loop -> uses call back function -> function without name is called call back function
//  const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item){
//     console.log(item);
// })

// for each loop using arrow function

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach(printMe) // here we are passing the reference of the function not executing the function.

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "cpp",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName, item.languageFileName);
})