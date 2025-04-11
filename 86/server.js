// using ES Modules	
// ******************* named export *******************
let b = "jd";
export let a = "Jaydeep"
export {b};

// ******************* default export (can be only one default export) *******************
const obj = {
    "x" : 1,
    y: 2,
    z: 3
}
export default obj

// CommonJS
// ******************* named export *******************
// let j = "Hiiii"
// module.name = j;
// let j = "hello world";
// module.exports = { j };

// ******************* default export (can be only one default export) *******************
// module.exports = value


