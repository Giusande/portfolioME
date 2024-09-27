const navbar = document.querySelector(".navbar");
const menuClick = document.querySelector(".bx-menu");
const fecharClick = document.querySelector(".bx-x-circle");
const logo = document.getElementById("logo");

fecharClick.addEventListener("click", ()=>{
    navbar.style.right = "-100%";
});

menuClick.addEventListener("click", ()=>{
    navbar.style.right = 0;
});

logo.addEventListener("click", ()=>{
    window.location.href = "#"
});