// let boxes = document.getElementsByClassName("boxes");
// Array.from(boxes).forEach((x) => {
//     x.style.backgroundColor = "red";
// });

// let box = document.getElementById("box");
// box.style.backgroundColor = "red";

// let boxes1 = document.querySelectorAll(".boxes");
// boxes1.forEach((a)=>{
//     a.innerHTML = "hello"
// })

// let box1 = document.querySelector(".boxes");
// box1.innerHTML = "hello"




// querySelectorAll ----- returns an array - can be targeted by simple foreach

// getElementsByClassName, etc.. ----- returns a html collection - can not be targeted by simple foreach, 
// use Array.from(boxes).forEach()





// getElementsByClassName	-----> HTMLCollection
// let x = document.getElementsByClassName("boxes");
// Array.from(x).forEach((e)=>{
//     e.style.backgroundColor = "red";
// })


// getElementsByTagName	    -----> HTMLCollection	


// querySelectorAll         -----> NodeList	
// let x = document.querySelectorAll(".boxes");
// x.forEach((e)=>{
//     e.style.color = "red";
// })


// getElementById	        -----> Single Element
// x.style.background = "red";

// querySelector	        -----> Single Element
// x.style.background = "red";   // it will target only first one