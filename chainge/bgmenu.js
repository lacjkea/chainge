const bgmenu = document.querySelector("#burger-menu");
const nav = document.querySelector("#nav-mobile");
const close = document.querySelector("#close-burger-menu");
const header = document.querySelector("#mobile-menu-icons");

bgmenu.addEventListener("click", openNav);

function openNav() {
    console.log("openNav");

    nav.classList.remove("hide");

    bgmenu.classList.add("hide");
    bgmenu.removeEventListener("click", openNav);
    close.classList.remove("hide");

    slideDown();
}

function slideDown() {
    console.log("slide down");

    nav.classList.add("slide-down");
    close.addEventListener("click", closeNav);
}

function closeNav() {
    console.log("close nav");

    nav.classList.remove("slide-down");
    close.classList.add("hide");
    close.removeEventListener("click", closeNav);
    bgmenu.classList.remove("hide");

    slideUp();
}

function slideUp() {
    console.log("slide up");

    nav.classList.add("slide-up");
    bgmenu.addEventListener("click", openNav)
}


