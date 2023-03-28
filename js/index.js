let menuBtn = document.querySelector(".menu__bar");
let listContainer = document.querySelector(".for__phone");
let myList = false;
listContainer.style.left = "750px";

function menuSection() {
    if (myList == false) {
        listContainer.style.left = "0"; 
        myList = true;
    }
    else if (myList == true) {
        listContainer.style.left = "750px"; 
        myList = false;
    }
}

menuBtn.onclick = menuSection;