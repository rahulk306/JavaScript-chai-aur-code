// object de-structuring

const course = {
    courseName:"js in hindi",
    price:"9999",
    courseInstructor:"Hitesh Choudhary"
}

//console.log(course);

const {courseInstructor:ins} = course
console.log(ins); // here we have de-structured the course object 

console.log(course);

// api concept 