let randomDelay = () => {
    return new Promise((resolve, reject) => {
        let randomNo = Math.floor(Math.random() * 7) + 1;
        console.log(randomNo)
        setTimeout(() => {
            resolve();
        }, randomNo * 1000)
    })
}

let arr = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
]

let printLogs = async () => {
    for (let items of arr) {
        await randomDelay();
        let paragraph = document.createElement("p");
        paragraph.innerText = items;
        document.body.append(paragraph);

        let dot = 0;
        let dotInterval = setInterval(() => {
            if (dot < 3) {
                paragraph.innerText = paragraph.innerText + ".";
                dot++;
            }
            else{
                dot = 0;
                paragraph.innerText = items;
            }
        }, 1000)


        // clearInterval(dotInterval)

    }
}

printLogs();


