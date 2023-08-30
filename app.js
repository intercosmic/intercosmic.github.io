let menu=document.querySelector(".menu");
let menu_open=document.querySelector("#more");
let menu_close=document.querySelector("#menu-close");
menu_open.addEventListener("click", function() {
    menu.style.transform="translateX(0)";
});
menu_close.addEventListener("click", function() {
    menu.style.transform="translateX(200px)";
});