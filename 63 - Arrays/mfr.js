// Map,filter,reduce are only for array


// (1) Map
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr1 = arr1.map((e,inx,arr)=>{ // it will also gives value index array
let newArr1 = arr1.map((e) => {
    return e * 100;
})
console.log(newArr1)


// (2) Filter
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let greaterThanTen = (e) => {
    if (e > 10) {
        return true;
    }
    return false;
}
let newArr2 = arr2.filter(greaterThanTen);
console.log(newArr2)


// (3) Reduce
let arr3 = [1, 2, 3, 4, 5, 6, 7];
let addEach = (a, b) => {
    return a + b;
}
let newArr3 = arr3.reduce(addEach);
console.log(newArr3)



