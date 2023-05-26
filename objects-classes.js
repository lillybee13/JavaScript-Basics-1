const car = {
    make: "Ford",
    model: "Focus",
    year: 2014,
    style: "hatchback",
    color: "black"
}

console.log(car.year);
console.log(car["year"]);

// //TypeScript Only
// interface Automobile {
//     make: String;
//     model: String;
// }

// class Dunebuggy implements Automobile {

// }

class Car {
    constructor(make, model, year, style, color){
        this.make = make;
        this.model = model;
        this.yer = year;
        this.style = style;
        this.color = color;

    }

paint(newColor){
    this.color = newColor
    console.log(`make it ${newColor}!`)
}

}

let car2 = new Car("Ford", "Focus", 2014, "hatchback", "black");
let car3 = new Car("Ram", "Promaster", 2017, "Cargo Van", "white")
car3.paint("blue");
// console.log(car3);

car2.paint("pink");
// console.log(car2);

class Truck extends Car {
    constructor(make, model, year, style, color, bedLength, liftSize){
        super(make, model, year, style, color)
        this.bedLength = bedLength;
        this.liftSize = liftSize;
    }

    fourWheelDrive(){
        console.log("Get to climbing");
    }

}

const awesomeTruck = new Truck("Ford", "F150", 2023, "with shell", "red", "long", 6);

awesomeTruck.paint("black");

console.log(awesomeTruck);

awesomeTruck.fourWheelDrive();