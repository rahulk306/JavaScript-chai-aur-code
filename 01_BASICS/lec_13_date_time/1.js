// dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let newDate = new Date()

newDate.toLocaleString('default',{
    weekday:"long"
});

console.log(newDate);