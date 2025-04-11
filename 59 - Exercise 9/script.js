// *********************** Exercise 9 - faulty calculator ***********************

/* 

Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let firstNumber = parseInt(prompt("Enter First Number = "))
let operation = prompt("Enter operation");
let secondNumber = parseInt(prompt("Enter Second Number = "))

let randomNumber = Math.floor(Math.random() * 100);

if(randomNumber<50){
    console.log("Random number is below 50 which is ", randomNumber);
    console.log("Wrong Operation");

    let obj = {
        "+": "-",
        "-": "/",
        "/": "*",
        "*": "+"
    }

    console.log(`${firstNumber} ${operation} ${secondNumber}`);
    console.log(eval(`${firstNumber} ${obj[operation]} ${secondNumber}`));

}
else if(randomNumber>50){
    console.log("Random number is above 50 which is ", randomNumber);
    console.log("Correct Operation");

    console.log(`${firstNumber} ${operation} ${secondNumber}`);
    console.log(eval(`${firstNumber} ${operation} ${secondNumber}`));
}
