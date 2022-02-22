let menuBars = document.querySelector(`.fa-bars`);
let openMenu = document.querySelector(`.hamburger-menu`);
let cross = document.querySelector (`.close`);
 
menuBars.addEventListener(`click`, function(){
    openMenu.classList.add("active");
})

cross.addEventListener(`click`, function(){
    openMenu.classList.remove("active");
})