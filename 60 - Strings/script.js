// *********************** Strings ***********************

// strings are immutable, it will not change in methods

let name = "jaydeep";
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])
console.log(name[6])
console.log(name.length);


// ----- template literal -----

let firstName = "Jaydeep";
let lastName = "Thakor";

let fullName = `My full name is ${firstName} ${lastName}`
console.log(fullName)


// ----- String Methods -----

let str = "StringMethods"

console.log(str.toUpperCase()); // this is a function ends with ()
console.log(str.toLowerCase());


console.log(str.length) // this is a property


console.log(str.slice(1,10)) // one char is included but 10th is not, it will print string from 1 to 10
console.log(str.slice(5)) // it will write complete string from 5th  

let newstr = "String Methods String"
console.log(newstr.replace("String", "STRING")) //  str is twice in the string, then it will change only first one
console.log(newstr.replaceAll("String", "STRING")) //  in replace all it will replace all the string with STRING


let a1 = "good";
let b1 = "morning";
let c1 = a1.concat(b1);
console.log(c1,"everyone")


let greeting = "   Hello, World!   ";
console.log(greeting.trim()); // it will remove white spaces from from starting and ending

let greeting1 = "h e l l o g o o d morning"
console.log(greeting1.replaceAll(" ","")) // to remove all white space


console.log(str.charAt(6))


console.log(str.indexOf("Methods"))

// str.split(".");

console.log(str.startsWith("Str")) // true
console.log(str.startsWith("methods")) // false

console.log(str.endsWith("Str")) // false
console.log(str.endsWith("ds")) // true


