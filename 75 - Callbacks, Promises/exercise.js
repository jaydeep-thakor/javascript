let randomNumber;
let a; // Declare `a` outside so it can be referenced

let randomNo = () => {
    randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);

    if (randomNumber === 100) {
        clearInterval(a); // Clear interval when randomNumber is 100
        alert("100");
    }
};

// Start the interval
a = setInterval(randomNo, 1);
