const hamburger = document.querySelector(".nav__hamburger");
const nav__list = document.querySelector(".nav__list");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    nav__list.classList.toggle("active");
})


document.querySelectorAll(".nav__link").forEach(n=>
     n.addEventListener("click",()=>{
        hamburger.classList.remove("active");
        nav__list.classList.remove("active")
     })
    )