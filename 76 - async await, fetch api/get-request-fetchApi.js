let getData = async () => {

    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let x = await data.json();
    console.log(x)

}

getData();


