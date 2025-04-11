// commonJS
// const http = require("http");

// Ecmascript es6 ("type": "module)
// import http from "http";


// using ES Modules
// ******************* named import *******************
import {a, b} from "./server.js";
console.log(a)
console.log(b)

// ******************* default import *******************
import jd from "./server.js";
console.log(jd)

// (function(exports, require, module, __filename, __dirname) {
    // Module code actually lives here
//   });

// using CommonJS
// ******************* named import *******************
// const {j} = require("./server.js");
// console.log(j);


// ******************* default import *******************
// const anyName = require("./server.js");
// console.log(anyName);