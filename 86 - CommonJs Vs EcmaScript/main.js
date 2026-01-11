// ------------------------------ ecmascript ------------------------------ type="module"

// named import
// import {a,b} from './script.js'
// import {c} from './script.js'
// console.log(a,b,c);

// default import
// import byanyname from "./script.js"
// console.log(byanyname);

// ------------------------------ commonJS ------------------------------ type="commonJS" (by default if we do not specify)

// named import
const {x} = require("./script.js")
console.log(x)

// default import
// const anyname = require("./script.js")
const anyname = require("./script.js").default;
console.log(anyname)

