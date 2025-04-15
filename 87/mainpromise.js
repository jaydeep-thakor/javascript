import fs from "fs/promises";

// we don't have to use async function to write await in module
let a = await fs.writeFile("new.txt", "new file");

let b = await fs.readFile("new.txt");
console.log(b.toString());

let c = await fs.appendFile("new.txt", "\n \n- created by jaydeep")
console.log(c)



