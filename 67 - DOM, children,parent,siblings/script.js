console.log(document.body.childNodes);
console.log(document.body.childNodes[2]);

console.log(document.body.firstChild);
console.log(document.body.lastChild);



console.log(document.body.lastElementChild);
console.log(document.body.firstElementChild);


console.log(document.body.firstElementChild.parentElement);


//to get only all elements nodes
console.log(document.body.firstElementChild.children);

console.log(document.body.firstElementChild.children[3].previousElementSibling);
console.log(document.body.firstElementChild.children[3].nextElementSibling);


console.log(document.body.firstElementChild.children[3].previousSibling);


let table = document.querySelector("#table");
console.log(table.rows)