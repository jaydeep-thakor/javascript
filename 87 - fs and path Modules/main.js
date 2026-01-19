// "type": "commonjs"
const fs = require("fs");
// const fs = require("fs/promises");

// writeFileSync, appendFileSync, etc run synchronously, we should not use it
// fs.writeFileSync("jaydeep.txt", "I am Jaydeep");
fs.writeFile("aboutme.txt", "My name is jaydeep", ()=>{
    // it is a callback, when file creates successfully, this code will run
    console.log("file created successfully");
    fs.readFile("aboutme.txt", (error, data)=>{
        console.log(error, data.toString());
    })
})

fs.appendFile("aboutme.txt", "I am a Software Developer", (err)=>{
    if(err){
        console.log("error :", err);
    }else{
        console.log("text appended successfully")
    }
});


