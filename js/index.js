let menuBtn = document.querySelector(".menu__bar");
let menuBtn2 = document.querySelector(".menu__bar2");
let listContainer = document.querySelector(".for__phone");
let myList = false;
listContainer.style.left = "1150px";

function menuSection() {
    if (myList == false) {
        listContainer.style.left = "0";
        menuBtn.style.opacity = "0";
        menuBtn2.style.opacity = "1";
        myList = true;
    }
    else if (myList == true) {
        listContainer.style.left = "1150px";
        menuBtn.style.opacity = "1";
        menuBtn2.style.opacity = "0";
        listContainer.style.transition = "0.3s ease-out";
        myList = false;
    }
}

menuBtn.onclick = menuSection;
menuBtn2.onclick = menuSection;