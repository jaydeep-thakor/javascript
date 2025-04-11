// ************************* Exercise 12 - create 5 boxes and assign a random color to each box ************************* 

let boxes = document.getElementsByClassName("boxes");



Array.from(boxes).forEach((x)=>{
    let random1 = Math.floor(Math.random() * 250);
    let random2 = Math.floor(Math.random() * 250);
    let random3 = Math.floor(Math.random() * 250);
    x.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
})

