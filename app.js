let all = document.querySelector(".all");
let sideMenu = document.querySelector(".sidebar-menu");
let cross = document.querySelector("#cross");
let body = document.querySelector("body");
let imgs = ["./assets/amazonbg.jpg" ,"./assets/bgimg.jpg","./assets/bgimg2.jpg","./assets/bgimg3.jpg","./assets/hero_image.jpg"];
let index = 0;
let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let mainSec = document.querySelector(".main-section");

rightArrow.addEventListener("click" ,(event)=>{
    if(index >= (imgs.length - 1)){
        index = 0;
        mainSec.style.backgroundImage = `url(${imgs[index]})`;
    }
    else {
        index++;
        leftArrow.classList.remove("arrow-active");
        rightArrow.classList.add("arrow-active");
        mainSec.style.backgroundImage = `url(${imgs[index]})`;
    }
})

leftArrow.addEventListener("click" ,(event)=>{
    if(index <= 0){
        index = 4;
        mainSec.style.backgroundImage = `url(${imgs[index]})`;
    }
    else {
        index--;
        rightArrow.classList.remove("arrow-active");
        leftArrow.classList.add("arrow-active");
        mainSec.style.backgroundImage = `url(${imgs[index]})`;
    }
})

all.addEventListener("click",()=>{
    sideMenu.classList.add("show");
    body.style.overflow = "hidden"
    
})
cross.addEventListener("click",()=>{
    sideMenu.classList.remove("show");
    body.style.overflow = "scroll"
})