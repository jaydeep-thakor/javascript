// ******************** Callback - pass a function to another function as an argument ********************

function successMessage(){
    console.log("Script has been loaded");
}

let loadScript = (src, callb) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callb();
    // document.head.append(sc);
    document.head.insertAdjacentElement("beforeend", sc)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js", successMessage);


// learn to create snippets