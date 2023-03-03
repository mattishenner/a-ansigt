document.getElementById("load-background").addEventListener("animationend", () =>{
    document.getElementById("load-background").remove();
});

const bookButton = document.getElementById("book-button");

document.querySelector("nav").addEventListener("animationend", () =>{
    document.querySelector("nav").style.position = "sticky";
});

bookButton.addEventListener("click", () => {
    window.open("https://booking.a-ansigt.dk/", "_blank")
})

const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("show");
})
