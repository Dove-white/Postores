let menuBtn = document.querySelector(".menu__bar");
let listContainer = document.querySelector(".for__phone");
let navLink = document.querySelector(".for__phone");
let myList = false;
listContainer.style.left = "1150px";

function menuSection() {
    if (myList == false) {
        listContainer.style.left = "0";
        menuBtn.style.opacity = "0";
        listContainer.style.transition = "0.3s ease-in";
        myList = true;
    }
    else if (myList == true) {
        listContainer.style.left = "1150px";
        menuBtn.style.opacity = "1";
        listContainer.style.transition = "0.3s ease-out";
        myList = false;
    }
}

menuBtn.onclick = menuSection;
navLink.onclick = menuSection;