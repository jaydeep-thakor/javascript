import path from "path";

 let myPath = "E:\\javascript\\87 - fs and path Modules\\pathModule.js"

//  to know extension
console.log("extension is ", path.extname(myPath));

//  to know complete path
console.log("extension is ", path.dirname(myPath));

//  to know file name
console.log("extension is ", path.basename(myPath));

// to join path
console.log(path.join("E://", "nodejs-code\\main.js"));

