let arr = [10,20,30,40,50]

// ****************** for loop ******************

// for(let i = 0; i<arr.length; i++){
//     let newArr = arr[i];
//     console.log(newArr)
// }


// ****************** foreach loop ******************

// arr.forEach((a)=>{
//     console.log(a)
// })


// ****************** for in loop ******************         used for objects

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
}

for(let o in obj){
    console.log(o, obj[o])
}


// ****************** for of loop ******************         used for arrays

let names = ["jaydeep","jd","hailee","august"]

for(let name of names){
    console.log(name)
}




// ****************** Example 1 ******************

// let cities = ["NYC","Chicago","Tokyo","Kyoto","Washington"];

// for(let i = 0; i<cities.length; i++){
//     console.log(cities[i])
// }


// ****************** Example 2 ******************

// let arr = [1,2,3,4,5];

// arr.forEach((e)=>{
//     console.log(e+100);
// })


// ****************** Example 3 ******************

// let oldArr = [5,6,7,8,9];
// let squareArr = [];

// for(let i=0; i<oldArr.length; i++){
//     let elements = oldArr[i]
//     squareArr.push(elements*10);
// }

// console.log(squareArr)



