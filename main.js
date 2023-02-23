//variables del DOM

const menuIconBtn = document.querySelector(".header__container-image__menu");
const menuCloseIconBtn = document.querySelector(".modal-navbar__close-icon");
const navbar = document.querySelector(".modal-navbar")
const body = document.getElementsByTagName("body"); 

console.log(navbar)

menuIconBtn.addEventListener("click", ()=>{

     navbar.style.display = "block";

})


menuCloseIconBtn.addEventListener("click", ()=>{

    navbar.style.display = "none"

})



function widthScreen(){

    if(screen.width > 375){
        navbar.style.display = "none";
    }

}

body.addEventListener("")

