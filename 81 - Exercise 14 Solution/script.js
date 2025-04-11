// Create a hacking simulator which has green background and it shows these messages with random delay of 1 to 7 seconds 
    
// Initializing Hacking...
// Reading your Files...
// Password files Detected...
// Sending all passwords and personal files to server...
// Cleaning up...

// The three dots must blink so that it looks like a real terminal


let randomNumber;
async function delay(){
    
    randomNumber = Math.floor(Math.random() * 8);
    console.log(randomNumber)

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve();
        },randomNumber*1000)

    })

}

let arr = ["Initializing Hacking", "Reading your Files", "Password files Detected", "Sending all passwords and personal files to server", "Cleaning up"];

(async function (){

    for(let str of arr){

        let para = document.createElement("p");
        para.innerHTML = str

        await delay()
        document.body.append(para)
    }


})();








