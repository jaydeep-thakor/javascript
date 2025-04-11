let getData = async () => {

    let data = await fetch("https://dummyjson.com/posts");

    let x = await data.json();

    let z = x.posts
    console.log(z)

    z.forEach((a)=>{
        

        let html = `
    


       <!-- From Uiverse.io by anniekoop --> 
<div class="card">
  <div class="container">
    <div class="left">
      <div class="status-ind"></div>
    </div>
    <div class="right">
      <div class="text-wrap">
        <p class="text-content">
        ${a.title}
        </p>
        <p class="time">2 hours ago</p>
      </div>
      <div class="button-wrap">
        <button class="primary-cta">View file</button>
      </div>
    </div>
  </div>
</div>

    
    
    
        `
    
    let cardsOuter = document.querySelector(".cards-outer");

    cardsOuter.insertAdjacentHTML("beforeend", html)



    })









}





getData();