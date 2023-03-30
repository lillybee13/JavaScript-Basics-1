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

fruits.push("orange")
fruits.pop()

fruits.unshift("pear")
fruits.shift()

let fruitsCopy = fruits.slice(1, 3)
let middleFruits = fruits.splice(1, 2, "mango")

console.log(fruits, middleFruits)
