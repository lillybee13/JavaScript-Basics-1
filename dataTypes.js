let name = "Melissa"
let age = 29
let thing = null

let nothing 

const tropical = true
const summer = false

const lilly = ["disney",3,tropical,{},[]]
const fruits = ["banana", "apple", "cherry", "lemon", "avacado"]

console.log(lilly[0],lilly[2])

let hubby = {name:"beni", age:30, food: ["brisket", "Steak"], sport: "snowboarding", favorites: {}}

let { name: benName, age: benAge, food } = hubby

console.log(hubby["age"])

age = 30

if(age < 30){
    console.log("spring chicken")
} else if(age === 30){
    console.log("perfect age")
} else {
    console.log("old fart")
}

//push adds to the end of an array
fruits.push("orange")
//pop removes the last item in the array
fruits.pop()

//unshift adds to the beginning of an array
fruits.unshift("pear")
//shift removes the first item in the array
fruits.shift()

//slice makes a copy of the original array. Can take in 2 arguments; the starting index and the ending index. If no arguments are specified it copies the whole array. Ending index is not included inside the copy.
let fruitsCopy = fruits.slice(1, 3) 
//can take 3 arguments. 1st, starting index; 2nd, how many items; 3rd, what it is being replaced with. Splice alters the original array, slice makes a copy
let middleFruits = fruits.splice(1, 2, "mango")

console.log(fruits, middleFruits)
