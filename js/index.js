let menuBtn = document.querySelector(".menu__bar");
let listContainer = document.querySelector(".phone__nav__items");
let myList = false;
listContainer.style.marginLeft = "-750px";

function menuSection() {
    if (myList == false) {
        listContainer.style.marginLeft = "0px"; 
        myList = true;
    }
    else if (myList == true) {
        listContainer.style.marginLeft = "-750px"; 
        myList = false;
    }
}

menuBtn.onclick = menuSection;