// *********************** Datatypes ***********************

// (1) - Primitive datatypes

let a = 10;
let b = null;
let c = true;
let d = BigInt(1000000);
let e = "jaydeep";
let f = Symbol("foo");
let g = undefined;

console.log(a,b,c,d,e,f,g)

console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g)


// (2) - Non-primitive datatypes

// Object
// Array
// Function

let details = {
    "name" : "Jaydeep Thakor",
    "age" : 26,
    "city" : "Chicago"
}
console.log(details)

// to see value
console.log(details.age)
console.log(details["age"])

// to update
details.age = 27;
console.log(details)

// to add new key value
details.salary = "500 cr"
console.log(details)