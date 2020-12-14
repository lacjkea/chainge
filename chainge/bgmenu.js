const bgmenu = document.querySelector("#burger-menu");
const nav = document.querySelector("#nav-mobile");
const close = document.querySelector("#close-burger-menu");

bgmenu.addEventListener("click", openBgMenu);

function openBgMenu() {
    console.log("openBgMenu");

    nav.classList.remove("hide");
    bgmenu.classList.add("hide");
    close.classList.remove("hide");
    close.addEventListener("click", closeBgMenu);

//    bgmenu.classList.add("hide");
//    close.classList.remove("hide");
//    logo.classList.add("hide");
//    login.classList.add("hide");
//    close.addEventListener("click", closeBgMenu);
//    pension.addEventListener("click", showSecNav);
}

function closeBgMenu() {
    console.log("closeBgMenu");

    nav.classList.add("hide");
    bgmenu.addEventListener("click", openBgMenu);
    close.classList.add("hide");
    bgmenu.classList.remove("hide");
}


