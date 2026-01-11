// "type": "module"
import fs from "fs/promises"

// We can use `await` directly because this file is an ES module,
// and ES modules support top-level await.
const fileRead = await fs.readFile("aboutme.txt");
console.log("file content is = ",fileRead.toString());

// everytime I run this code it will keep appned this text
const appendText = await fs.appendFile("aboutme.txt", "\n\n\n\n\n I am 27 year old");
console.log(appendText);

