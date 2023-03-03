/* ********************** | DO STUFF AFTER LOADING ANIMATION | ********************** */
/* ********************** | DO STUFF AFTER LOADING ANIMATION | ********************** */
document.getElementById("load-background").addEventListener("animationend", () =>{
    document.getElementById("load-background").remove();
    document.querySelector("nav").style.position = "sticky"; 
    document.body.classList.remove("prevent-scroll");
});

/* ********************** | ACTION FOR BOOKING BUTTON | ********************** */
/* ********************** | ACTION FOR BOOKING BUTTON | ********************** */
const bookButton = document.getElementById("book-button");
bookButton.addEventListener("click", () => {
    window.open("https://booking.a-ansigt.dk/", "_blank")
})

/* ********************** | RESPONSIVE MENU | ********************** */
/* ********************** | RESPONSIVE MENU | ********************** */
const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");
menuIcon.addEventListener("click", () => {
    navList.classList.toggle("show");
    menuIcon.classList.toggle("close-icon");
})
