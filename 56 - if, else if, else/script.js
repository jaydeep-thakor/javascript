// *********************** if, else if, else ***********************

let age = prompt("Enter your age = ");

if(age>=1 && age<=18){
    console.log("You can not drive the car")
}
else if(age>18 && age<=100){
    console.log("You can drive the car")
}
else{
    console.log("Invalid age")
}





// *********************** Ternary operator ***********************

let marks = 33;

let isPass = marks>=33 ? "pass" : "failed";

console.log(isPass)


// const age1 = parseInt(prompt("Enter your age"));

// const check = age1 > 0 && age1 < 18 ? "You can drive the car"  
//               : age1 > 18 && age1 < 100 ? "you can drive the car" 
//               : age1 > 100 ? "invalid age"
//               : "error"

//               console.log(check)
