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

secondaryBtn.addEventListener('click', () => {
    readMoreContainer.classList.add('active-popup');
    readMoreCross.classList.add('active-popup');
    readMoreContainer.style.width = "100%";
    readMoreContainer.style.height = "100%";
    readMoreCross.style.opacity = "1";
    // readMoreContainer.style.border = "1px solid #00a0c1";
});

readMoreCross.addEventListener('click', () => {
    readMoreContainer.classList.remove('active-popup');
    readMoreCross.style.opacity = "0";
});