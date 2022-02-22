let menuBars = document.querySelector(`.fa-bars`);
let openMenu = document.querySelector(`.hamburger-menu`);
let cross = document.querySelector (`.close`);

console.log(menuBars);
console.log(cross);
 
menuBars.addEventListener(`click`, function(){
    openMenu.style.display = "block";
})

cross.addEventListener(`click`, function(){
    openMenu.style.display = "none";
})