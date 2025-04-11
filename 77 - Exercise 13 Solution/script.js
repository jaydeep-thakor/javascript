// function createCard(title, cName, views, monthsOld, duration, thumbnail){
//     // Finish this function
// }


// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")



let cardHtml = `

        <div class="card">
        
            <div class="card-thumbnail">
            
                <div class="img-outer">
                <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw" alt="">
                    <div class="duration">31:00</div>
            </div>

            </div>

            <div class="card-details">
            
            <h5 class="title">Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1</h5>
            
            <div class="other-details">
            <h6 class="channel-name">code with harry</h6>

            <h6 class="views">122</h6>
            <h6 class="date">1 year</h6>
            </div>
            
            
            </div>
            
        </div>
        
`


let btn = document.getElementById("btn");
let container = document.querySelector(".container");

btn.addEventListener("click", ()=>{
    container.insertAdjacentHTML("afterbegin", cardHtml)
    alert("Button was clicked");
})

