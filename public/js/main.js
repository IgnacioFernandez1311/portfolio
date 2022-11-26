
var hamburgerMenu = document.querySelector(".navbar__menu")
var navbarList = document.querySelector(".navbar__ul")
var navbarItem = document.querySelector(".navbar__link")

hamburgerMenu.onclick = function() {
    navbarList.classList.toggle("navbar__ul--active")
}

navbarItem.onclick = function() {
    navbarList.classList.remove("navbar__ul--active")
}