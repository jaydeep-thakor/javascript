// *********************** Functions ***********************

// ----- Normal Function -----

function greeting(name){
    console.log(`Hey "${name}" Hope you're having a great day!`)
    console.log(`Hi "${name}" Just checking in—hope all’s well!`)
    console.log(`Hello "${name}" Sending good vibes your way!`)
    console.log(`Hey "${name}" Thinking of you—have an awesome day!`)
    console.log(`Hi "${name}" Just wanted to say hello!`)
}
greeting("Jaydeep");

function sum1(a,b,c){
    console.log(a+b+c);
}
sum1(34,65,23);


function sum2(a,b,c=10){
    return a+b+c;
}

let ans = sum2(23,63);
console.log(ans);



// ----- Arrow Function -----

let message = () => {
    alert("You are great")
} 

message();









