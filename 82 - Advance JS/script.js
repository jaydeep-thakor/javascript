// Immediately Invoked Function Expression

// (function hello(){
//     console.log("Hello")
// })();


// let a,b = [1,2]; it will assign 1,2 to b, if we want a = 1 and b = 2 then we use 
let [a,b] = [1,2]
console.log(a,b)

// to store other array numbers, we use ...(anyVariableName)
let [x,y, ...restNumbers] = [1,2,323,324,123,2]
console.log(x);
console.log(y);
console.log(restNumbers);


let obj = {
    c: 100,
    d: 200,
}

let {c,d} = obj;
console.log(c,d);


let sum = (j,k,l) => {
    return j+k+l;
}
let sumArr = [12,12,12]
// console.log(sum(sumArr[0],sumArr[1],sumArr[2]))

// spread operator
console.log(sum(...sumArr))




// it will map this array to obj from index 0,1,2,3,4
let newArr = ["Jaydeep1","Jaydeep2","Jaydeep3","Jaydeep4","Jaydeep5"]
let newObj = {...newArr}
console.log(newObj)


// ----------------------------------- Hoisting -----------------------------------
// happens in var only
// hoisting means we can access variable before initializing variable name 
// for ex

console.log(fullName); // it will return undefined
var fullName = "Jaydeep";



// ERROR
// func1();
// var func1 = () => {
//     console.log("Hello");
// }

// It will work
func1();
function func1() {
    console.log("Hello 1");
}

// hoisting will not work for let and const, it is for var, and normal function, if you call function before initilize it will work




