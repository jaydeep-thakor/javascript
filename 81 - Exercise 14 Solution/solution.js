// Create a hacking simulator which has green background and it shows these messages with random delay of 1 to 7 seconds 
    
// Initializing Hacking...
// Reading your Files...
// Password files Detected...
// Sending all passwords and personal files to server...
// Cleaning up...

// The three dots must blink so that it looks like a real terminal

let arr = ["Initializing Hacking", 
    "Reading your Files", 
    "Password files Detected", 
    "Sending all passwords and personal files to server", 
    "Cleaning up"]


let randomNumber = Math.floor(Math.random() * 7+1);

async function timer(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        }, randomNumber*1000)
    })

}

async function main(){

    for(let msg of arr){
        randomNumber = Math.floor(Math.random() * 7+1);
        console.log(randomNumber) 

        let h1 = document.createElement("h1");
        h1.innerHTML = msg;
        document.body.append(h1)

        let x = await timer();

    }

    

}

main()





