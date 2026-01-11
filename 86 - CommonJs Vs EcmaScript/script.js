// ------------------------------ ecmascript ------------------------------ type="module"

// named export
// export const a = 10;
// export const b = 20;
// const c = 30;
// export {c};

// default export - can be only one in a file
// const obj = {
//     name: "Jaydeep",
//     designation: "Software developer"
// }
// export default obj;



// ------------------------------ commonJS ------------------------------ type="commonJS" (by default if we do not specify)

// can not write module.exports twice in commonJS becasuse CommonJS allows only ONE module.exports value.
// The second assignment destroys the first one.

// named export
const x = 10;
// module.exports = {x}

// default export
const y = 20;
// module.exports = y;

module.exports = {
    x, 
    default: y
}


// (function(exports, require, module, __filename, __dirname){
    // module(commonJS) code actually lives here. therefor we can use __dirname, __filename
// })()
