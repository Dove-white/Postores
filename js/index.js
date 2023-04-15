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

//for read more container

let secondaryBtn = document.querySelector(".btn__secondary");
let readMoreContainer = document.querySelector(".learn__more__container");
let readMoreCross = document.querySelector(".read__more__cross");
let readMoreText = document.querySelector(".read__more__text");
readMoreContainer.style.width = "0";
readMoreContainer.style.height = "0";
readMoreCross.style.opacity = "0";
readMoreText.style.opacity = "0";

function readMore() {
    if (myList == false) {
        readMoreContainer.style.width = "60%";
        readMoreContainer.style.height = "60%";
        readMoreContainer.style.border = "1px solid #00a0c1";
        readMoreCross.style.opacity = "1";
        readMoreText.style.opacity = "1";
        readMoreText.style.transition = "2s ease";
        // listContainer.style.transition = "20s ease-out";
        myList = true;
    }
    else if (myList == true) {
        readMoreContainer.style.width = "0";
        readMoreContainer.style.height = "0";
        readMoreContainer.style.border = "none";
        readMoreCross.style.opacity = "0";
        readMoreText.style.opacity = "0";
        readMoreText.style.transition = "none";
        myList = false;
    }
}

secondaryBtn.onclick = readMore;
readMoreCross.onclick = readMore;