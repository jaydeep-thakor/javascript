// let a = setInterval(()=>{
//   console.log("Hi")  
// },1000)
// clearInterval(a);

// let b = setTimeout(()=>{
//     console.log("Hi")  
//   },1000)
// clearTimeout(b);

// let msg = () => {
//     console.log("Hello")
// }
// setInterval(msg, 1000);

// ************************* events *************************

let btn = document.getElementById("btn");
let body = document.querySelector("body");

// btn.addEventListener("click", ()=>{
//     console.log("Button was clicked")
// })
// btn.addEventListener("contextmenu", ()=>{
//     console.log("Button was right clicked")
// })
// btn.addEventListener("mouseover", ()=>{
//     console.log("Button was hovered")
// })
// btn.addEventListener("mousemove", ()=>{
//     console.log("Button moved on button")
// })




// if I keep pressing the key it will listen the event
body.addEventListener("keydown", (e)=>{
    // console.log("Keydown")
    // handling event e.key, e.type, etc.....
    console.log(e.key, e.type)
})

// only listend once even if I keep pressing it
// body.addEventListener("keyup", ()=>{
//     console.log("keyup")
// })




// **************** it will overwright inline onclick ****************
let btnClick = document.querySelector("#btn-click");
btnClick.onclick = () => {
    alert("Hi");
};

 
// ********************************* addEventListener can be written multiple time *********************************

let multiListener = document.querySelector("#multiple-event-listener");
multiListener.addEventListener("click", ()=>{
    alert("Onclick 1")
})
multiListener.addEventListener("click", ()=>{
    alert("Onclick 2")
})


// Add event listeners

function onClick5() {
    alert("Onclick 5");
}

let multiListener1 = document.querySelector("#multiple-event-listener1");

multiListener1.addEventListener("click", onClick5);
multiListener1.removeEventListener("click", onClick5);
