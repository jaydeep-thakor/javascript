async function getData(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data received");
        },3000)
    })

}

let main = async () => {

console.log("getting data");

console.log("data almost there");

let data = await getData();

console.log(data);

console.log("performing tasks on received data");

console.log("tasks completed")

}


main();

