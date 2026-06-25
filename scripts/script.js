const menuBtn = document.querySelector(".menu-btn");
const icon = menuBtn.querySelector("i");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click",()=>{

    navbar.classList.toggle("active");

    if(navbar.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});

document.querySelectorAll(".navbar a").forEach(link=>{
    link.addEventListener("click",()=>{
        navbar.classList.remove("active");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});
