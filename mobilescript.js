let menu = document.getElementById("hamburger-menu");
MobileUserMenu();

function MobileUserMenu(){
    console.log(menu.style.width)
    menu.style.display = menu.style.display == "none" ? "grid" : "none";
    menu.style.width = menu.style.width == "0%" ? "100%" : "0%";
}