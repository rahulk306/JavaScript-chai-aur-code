// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return val
// })

// console.log(values) 

// for each loop returns nothing 

// FILTER -> it return elements 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNums = myNums.filter( (item) => item > 5)
// console.log(newNums)

// const newNums2 = myNums.filter( (item) => {
//     return item > 5
// })
// console.log(newNums2);

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004}, 
//     {title: 'Book Two', genre: 'History', publish: 1982, edition: 2004}, 
//     {title: 'Book Three', genre: 'Sci-fi', publish: 1983, edition: 2004}, 
//     {title: 'Book Four', genre: 'polity', publish: 1984, edition: 2004}, 
//     {title: 'Book Five', genre: 'tech', publish: 1985, edition: 2004}, 
//     {title: 'Book Six', genre: 'Fiction', publish: 1986, edition: 2004}, 
//     {title: 'Book Seven', genre: 'Fiction', publish: 1987, edition: 2004}, 
//     {title: 'Book Eight', genre: 'Fiction', publish: 1988, edition: 2004}
// ]

// const bookset = books.filter( (item) => item.genre === 'Fiction')
// console.log(bookset);

// MAP is same as FILTER 

const myNumbers = [1,2,3,4,5,6]
// const myNum = myNumbers.map( (item) => {return item + 10} )
// console.log(myNum);

// chaining
// const newNums = myNumbers.map( (num) => num*10 ).map( (num) => num+1).filter( (num) => num >= 30 )
// console.log(newNums);

// const myTotal = myNumbers.reduce( function (acc, curVal) {
//     return acc + curVal
// }, 0) // here 0 is the initial value of the acc variable -> after each iteration acc = acc + curVal

// console.log(myTotal);

const myTotal1 = myNumbers.reduce( (acc, curVal) => acc + curVal, 0)
console.log(myTotal1);