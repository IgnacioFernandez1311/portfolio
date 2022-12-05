
function removeNavbarList() {
    navbarList.classList.remove("navbar__ul--active")
}

const hamburgerMenu = document.querySelector(".navbar__menu")
const navbarList = document.querySelector(".navbar__ul")
const navbarItems = document.querySelectorAll(".navbar__link")
const navbarMenuClose = document.querySelector(".navbar__menu_close")
const projectItemsFlip = document.querySelectorAll(".main__project_item")

hamburgerMenu.onclick = function () {
    navbarList.classList.add("navbar__ul--active")
}

navbarMenuClose.onclick = function () {
    removeNavbarList()
}

navbarItems.forEach(item => item.addEventListener("click", () => {
    removeNavbarList()
}))

projectItemsFlip.forEach(item => item.addEventListener("click", () => {
    item.classList.toggle("rotated")
}))


