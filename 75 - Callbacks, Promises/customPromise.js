let getPost = async () => {
    let data1 = await fetch("https://jsonplaceholder.typicode.com/comments")
    let x1 = data1.json();
    return x1;
}

let getTodo = async () => {
    let data2 = await fetch("https://jsonplaceholder.typicode.com/posts")
    let x2 = data2.json();
    return x2;
}


let p3 = Promise.any([getPost(), getTodo()]);

p3.then((arg)=>{
    console.log(arg)
}).catch((err)=>{
    console.log(err)
})







