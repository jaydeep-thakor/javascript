// let randomNumber = Math.floor(Math.random() * 101);
// console.log(randomNumber);

// let pro = new Promise((resolve, reject)=>{

//     if(randomNumber<=50){
//         resolve("Resolved");
//     }
//     else if(randomNumber>50){
//         reject("Rejected")
//     }

// })

// ---------- .then, .catch can be written multipletime ----------
// pro.then((arg1)=>{
//     console.log(arg1)
// }).catch((arg2)=>{
//     console.log(arg2)
// })

let pro1 = new Promise((resolve, reject) => {
    resolve("pro1 has been resolved");
    console.log("pro1 resolved");
});

let pro2 = new Promise((resolve, reject) => {
    resolve("pro2 has been resolved");
    console.log("pro2 resolved");
});

let pro3 = new Promise((resolve, reject) => {
    reject("pro3 has been rejected");
    console.log("pro3 rejected");
});


// let proAll = Promise.all([pro1, pro2, pro3]);

let proAll = Promise.allSettled([pro1, pro2, pro3]);
 
proAll.then((results) => {
    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log(result.value); 
        } else if (result.status === "rejected") {
            console.log("Error:", result.reason); 
        }
    });
});







// Function to fetch data from a URL
const fetchData = (url) => {
    return fetch(url)
      .then(response => response.json()) // Convert response to JSON
      .catch(() => `Error fetching ${url}`); // Handle errors
  };
  
  
