let parentDiv = document.querySelector(".parent-div"); 
let parentDivInner = document.querySelector(".parent-div-inner"); 
let child = document.querySelector(".child"); 


// If i click on clild each event will listen because it is inside the parent divs

// parentDiv.addEventListener("click", ()=>{
//      alert("Parent Div Was Clicked")
// })

// parentDivInner.addEventListener("click", ()=>{
//     alert("Parent Div Inner Was Clicked")
// })

// child.addEventListener("click", ()=>{
//     alert("Child Was Clicked")
// })



// ******************************* Event Bubbling *******************************

parentDiv.addEventListener("click", (e)=>{
    e.stopPropagation();
     alert("Parent Div Was Clicked")
})

parentDivInner.addEventListener("click", (e)=>{
    e.stopPropagation();
    alert("Parent Div Inner Was Clicked")
})

child.addEventListener("click", (e)=>{
    e.stopPropagation();
    alert("Child Was Clicked")
})


