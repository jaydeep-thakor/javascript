// *********************** Loops ***********************

// ----- For loop -----

for(let i = 0; i<100; i++){
    console.log(i+1);
}



// ----- For in loop -----

let details = {
    "name": "Jaydeep Thakor",
    "age": 26,
    "city": "Sydney"
}

for(let key in details){
    let value = details[key];
    console.log(key, "is", value)
}


     
// ----- For of loop -----

let arr = [1,2,3,4,5,6,7,8,9,10];

for(let i of arr){
    console.log(i)
}

let str = "Melbourne";

for(let i of str){
    // console.log(i.toUpperCase())
    console.log(i)
}

let obj = {
    name: "jd",
    age: 26,
    "city": "Mehsana"
}

let keys = Object.keys(obj);
console.log(keys.length)

for(let i=0; i<keys.length; i++){
    let key = keys[i];
    console.log(`${key} is ${obj[key]}`)
}


// ----- While loop -----

let number = 1;
while(number<=10){
    console.log(number)
    number++;
}



// ----- Do While loop -----

let number1 = 1000;
do{
    console.log(number1)
    number1++;
}while(number1<=100)

