// Arrays are mutable it can be changed

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.length);

arr[5] = "jaydeep"; // it will change existing array, arrays are mutable

console.log(arr) 
console.log(arr[2]) 


// type of array is object




// *************** Array Methods *************** 

let newArr = [1,2,3,4,5,6,7,8,9,10]
console.log(newArr.toString());


let newArr1 = [1,2,3,4,5]
console.log(newArr1.join("-"))




// 1 - pop (it will remove last element of an array)
let arr1 = [1,2,3,4,5]
arr1.pop();
console.log(arr1)

// 2 - push (it will add an element at last of an array)
let arr2 = [1,2,3,4,5];
arr2.push("Jaydeep");
console.log(arr2)

// 3 - shift (it will remove first element of an array)
let arr3 = [1,2,3,4,5];
arr3.shift();
console.log(arr3)

// 4 - unshift (it will add an element at first of an array)
let arr4 = [1,2,3,4,5];
arr4.unshift("jd");
console.log(arr4)



// delete - it will only remove the value space will be there
let arr5 = [1,2,3,4,5];
delete arr5[2]
console.log(arr5[2]) // undefined
console.log(arr5)




// concat - it will not change existing array, it will return an new array
let arr10 = [1,2,3]
let arr11 = [4,5,6]
let arr12 = [7,8,9]

let newMergedArr = arr10.concat(arr11, arr12)
console.log(newMergedArr)




// splice - it is used to add element at specific position and remove eixsting elements
let arr20 = [1,2,3,4,5,6,7,8,9,10];
arr20.splice(4,3,"jaydeep","jd","hailee","j") // it will remove 3 elements from index 4 and add elements as I wrote
arr20.splice(2,5) // it will remove 5 elements from index 2
console.log(arr20)



// slice - slice out a piece from an array, it return an new array

let arr21 = [1,2,3,4,5,6,7,8,9,10];
let newSliceArr = arr21.slice(1,5);
console.log(newSliceArr)
console.log(arr21)



let str = "Jaydeep" // to convert a string to array 
console.log(Array.from(str))





