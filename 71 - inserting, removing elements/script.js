let containerBox = document.querySelector(".container .box");
console.log(containerBox.innerHTML);
console.log(containerBox.innerText);
console.log(containerBox.outerHTML);

let container = document.querySelector(".container");
console.log(container.innerHTML);
console.log(container.innerText);
console.log(container.outerHTML);

container.nodeName
container.tagName

container.hasAttribute("style"); // true/false
container.getAttribute("id"); 
container.setAttribute("style", "background: red");
container.removeAttribute("class");
container.attributes;

// document.designMode = "on";

// data-
let x = document.querySelector("#jd").dataset
console.log(x)

// ********************************* Insert/append div *********************************

let containerFluid = document.querySelector(".container-fluid");

let button = document.createElement("button");
button.innerText = "I am a button";
button.setAttribute("class","btn");

// *********** to insert node element ***********
// containerFluid.append(button)
// containerFluid.prepend(button)
// containerFluid.before(button)
// containerFluid.after(button)
// containerFluid.replaceWith(button)

// *********** to insert html *********** afterbegin, beforebegin, afterend, beforeend
// containerFluid.insertAdjacentHTML("afterbegin", "<button class='btn-primary'>Button</button>");


// *********** to insert text *********** afterbegin, beforebegin, afterend, beforeend
// containerFluid.insertAdjacentText("afterbegin", "hello");

// *********** to insert Element *********** afterbegin, beforebegin, afterend, beforeend
containerFluid.insertAdjacentElement("afterbegin", button);

// button.remove(); - to remove node from html


let newDiv = document.querySelector("#new-div"); 

newDiv.classList.add("jd")
newDiv.classList.remove("w-100")
newDiv.classList.toggle("switch")

console.log(newDiv.classList) 
console.log(newDiv.className)



// matches
// closest
// contains