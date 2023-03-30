//Functions allow us to make our code reusable

//function declaration
function myFunc (name){
    //concatinate
    // console.log("Hello " + name) 

    //template string literal
    // console.log(`Hello ${name}`)

    //no code will run after Return, usually last thing you will do in a function
    return `Hello ${name}`
    // console.log("Hello World");
}

// myFunc("Melissa")
// console.log(myFunc("Melissa")); 
let myVar = myFunc("Melissa")
// console.log(myVar);

//Function expression
const exp = function(name){
    return `Hello ${name}`
}
    // console.log(exp("Benjamin"));

//Arrow function, has an implicit return for one line statements
// const arrow = (name) => `Hello ${name}`

//if multiple lines brackets must be used with a return
const arrow = (name) => {
    return `Hello ${name}`
}
console.log(arrow("Kambri"));