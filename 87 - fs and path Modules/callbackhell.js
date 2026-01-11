const fs = require("fs");

fs.writeFile("aboutme.txt", "My name is jaydeep", () => {
    console.log("file created successfully");
    fs.readFile("aboutme.txt", (error, data) => {
        console.log(error, data.toString());
        // when file is read, craete another file and read
        fs.writeFile("aboutme.txt", "My name is jaydeep", () => {
            console.log("file created successfully");
            fs.readFile("aboutme.txt", (error, data) => {
                console.log(error, data.toString());
                // when file is read, craete another file and read
                fs.writeFile("aboutme.txt", "My name is jaydeep", () => {
                    console.log("file created successfully");
                    fs.readFile("aboutme.txt", (error, data) => {
                        console.log(error, data.toString());
                        // when file is read, craete another file and read
                        fs.writeFile("aboutme.txt", "My name is jaydeep", () => {
                            console.log("file created successfully");
                            fs.readFile("aboutme.txt", (error, data) => {
                                console.log(error, data.toString());
                                // when file is read, craete another file and read
                                fs.writeFile("aboutme.txt", "My name is jaydeep", () => {
                                    console.log("file created successfully");
                                    fs.readFile("aboutme.txt", (error, data) => {
                                        console.log(error, data.toString());
                                        // when file is read, craete another file and read
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})