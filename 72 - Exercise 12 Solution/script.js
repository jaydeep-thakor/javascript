// *************************** 5 box exercise solution **************************

// let container = document.querySelector(".container").children;

let boxes = document.getElementsByClassName("boxes");
    


function randomFunction(){
    
let randomNumber1 = Math.floor(Math.random() * 256);
let randomNumber2 = Math.floor(Math.random() * 256);
let randomNumber3 = Math.floor(Math.random() * 256);

        return `rgb(${randomNumber1} ${randomNumber2} ${randomNumber3})`;
}

Array.from(boxes).forEach((e)=>{
    e.style.backgroundColor = randomFunction();
    e.style.color = "white";
})

// setInterval(()=>{
//     Array.from(boxes).forEach((e)=>{
//         e.style.backgroundColor = randomFunction();
//         e.style.color = "white";
//     })
// },100)





