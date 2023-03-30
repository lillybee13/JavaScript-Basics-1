

for(let i = 0; i < 5; i++){
    // console.log(i);
}

let i = 0;
let nums = [4,8,3,22,9];

// while(i < 5){

//    if(i % 2 === 0 ){
//     console.log(i, "even");
//    }else{
//     console.log(i, "odd");
//    }

//     i++;
// }

// for(let k = 0; k < nums.length; k++){
//     if(i % 2 === 0){
//         console.log(i, "even");
//     }else{
//         console.log(i, "odd");
//     }
// }

// FizzBuzz 


/*
    Write a for loop that prints 1 - 50 in the terminal 
    if the number is devisible by 3 print "Fizz"
    if the number is devisile by 5 print "Buzz"
    if the number is devisible by 3 & 5 print "FizzBuzz"
*/

// vvvvv code here vvvvvv

for(let i = 1; i < 51; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("Fizzbuzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//---------------------------------------------------------------------

const num = [8, -8 , 4, 7, 3, 9]

