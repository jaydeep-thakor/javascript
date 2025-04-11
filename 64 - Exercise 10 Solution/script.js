// *********************** Solution - Exercise 10 - Business Name Generator ***********************

/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let randonNumber = Math.floor(Math.random() * 101)
console.log(randonNumber)

let first;
let second;
let third;

if(randonNumber >= 0 && randonNumber <= 33){
    first = "Crazy"
}
else if(randonNumber > 33 && randonNumber <= 66){
    first = "Amazing"
}
else if(randonNumber > 66 && randonNumber <= 100){
    first = "Fire"
}

randonNumber = Math.floor(Math.random() * 101)

if(randonNumber > 0 && randonNumber <= 33){
    second = "Engine"
}
else if(randonNumber > 33 && randonNumber <= 66){
    second = "Foods"
}
else if(randonNumber > 66 && randonNumber <= 100){
    second = "Garments"
}

randonNumber = Math.floor(Math.random() * 101)

if(randonNumber > 0 && randonNumber <= 33){
    third = "Bros"
}
else if(randonNumber > 33 && randonNumber <= 66){
    third = "Limited"
}
else if(randonNumber > 66 && randonNumber <= 100){
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)