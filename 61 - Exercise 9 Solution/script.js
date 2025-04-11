// *********************** Solution - Exercise 9 - faulty calculator ***********************

/* 

Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 50% of the times

*/

let randomNo = Math.floor(Math.random() * 101);
console.log(randomNo);

let inputOne = parseFloat(prompt("Enter first number"));
let operator = prompt("Enter Operator");
let inputTwo = parseFloat(prompt("Enter second number"));

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if(randomNo<=50){
    console.log(eval(`${inputOne} ${operator} ${inputTwo}`))
}
else{
    operator = obj[operator];
    console.log(eval(`${inputOne} ${operator} ${inputTwo}`))
}



