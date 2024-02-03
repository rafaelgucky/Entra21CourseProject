let menu = document.getElementById("hamburger-menu");
MobileUserMenu();

function MobileUserMenu(){
    menu.style.display = menu.style.display == "none" ? "grid" : "none";
}