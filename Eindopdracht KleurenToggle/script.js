//dropdownmenu
let menuIcon = document.getElementById("hamburger");
let menu = document.querySelector("nav");

function dropDown() {
    menu.classList.toggle("navMenuShow");
};

menuIcon.addEventListener("click", dropDown);

function dropOver() {
    menu.classList.add("navMenuDrop");
};

function dropLeave() {
    menu.classList.remove("navMenuDrop");
};

menuIcon.addEventListener("mouseover", dropOver);
menu.addEventListener("mouseover", dropOver)
menuIcon.addEventListener("mouseout", dropLeave);
menu.addEventListener("mouseout", dropLeave)


//het veranderen van de achtergrond
let body = document.body;
let homebg = document.getElementById("home");
let redbg = document.getElementById("rood");
let bluebg = document.getElementById("blauw");
let yellowbg = document.getElementById("geel");
let greenbg = document.getElementById("groen");
let purplebg = document.getElementById("paars");
let orangebg = document.getElementById("oranje");

let kleurtekst = document.getElementById("kleurKeuzeTekst");

homebg.addEventListener("click", bgHome);
redbg.addEventListener("click", bgRed);
bluebg.addEventListener("click", bgBlue);
yellowbg.addEventListener("click", bgYellow);
greenbg.addEventListener("click", bgGreen);
purplebg.addEventListener("click", bgPurple);
orangebg.addEventListener("click", bgOrange);

//complete functies
function bgHome() {
    menu.classList.remove(menu.classList[0]);
    menu.classList.add("navMenuHide");
    body.classList.remove(body.classList[0]);
    body.classList.add("home");
    kleurtekst.innerHTML = "De kleur is wit";
    checkHome.checked = true;
};

function bgRed() {
    menu.classList.remove(menu.classList[0]);
    menu.classList.add("navMenuHide");
    body.classList.remove(body.classList[0]);
    body.classList.add("roodbg");
    kleurtekst.innerHTML = "De kleur is rood";
    checkRood.checked = true;
};

function bgBlue() {
    menu.classList.remove(menu.classList[0]);
    menu.classList.add("navMenuHide");
    body.classList.remove(body.classList[0]);
    body.classList.add("bluebg");
    kleurtekst.innerHTML = "De kleur is blauw";
    checkBlauw.checked = true;
};

function bgYellow() {
    menu.classList.remove(menu.classList[0]);
    menu.classList.add("navMenuHide");
    body.classList.remove(body.classList[0]);
    body.classList.add("yellowbg");
    kleurtekst.innerHTML = "De kleur is geel";
    checkGeel.checked = true;
};

function bgGreen() {
    menu.classList.remove(menu.classList[0]);
    menu.classList.add("navMenuHide");
    body.classList.remove(body.classList[0]);
    body.classList.add("greenbg");
    kleurtekst.innerHTML = "De kleur is groen";
    checkGroen.checked = true;
};

function bgPurple() {
    menu.classList.remove(menu.classList[0]);
    menu.classList.add("navMenuHide");
    body.classList.remove(body.classList[0]);
    body.classList.add("purplebg");
    kleurtekst.innerHTML = "De kleur is paars";
    checkPaars.checked = true;
};

function bgOrange() {
    menu.classList.remove(menu.classList[0]);
    menu.classList.add("navMenuHide");
    body.classList.remove(body.classList[0]);
    body.classList.add("orangebg");
    kleurtekst.innerHTML = "De kleur is oranje";
    checkOranje.checked = true;
};

//achtergrond door nummers aanpassen

document.addEventListener('keypress', keyChange);

function keyChange(entry) {
    if (entry.code === "Digit1") {
        bgHome();
    } else if (entry.code === "Digit2") {
        bgRed();
    } else if (entry.code === "Digit3") {
        bgBlue();
    } else if (entry.code === "Digit4") {
        bgYellow();
    } else if (entry.code === "Digit5") {
        bgGreen();
    } else if (entry.code === "Digit6") {
        bgPurple();
    } else if (entry.code === "Digit7") {
        bgOrange();
    };
};

//achtergrond door radiobuttons en vice versa

let homebglabel = document.getElementById("labelHome");
let redbglabel = document.getElementById("labelRood");
let bluebglabel = document.getElementById("labelBlauw");
let yellowbglabel = document.getElementById("labelGeel");
let greenbglabel = document.getElementById("labelGroen");
let purplebglabel = document.getElementById("labelPaars");
let orangebglabel = document.getElementById("labelOranje");

homebglabel.addEventListener("click", bgHome);
redbglabel.addEventListener("click", bgRed);
bluebglabel.addEventListener("click", bgBlue);
yellowbglabel.addEventListener("click", bgYellow);
greenbglabel.addEventListener("click", bgGreen);
purplebglabel.addEventListener("click", bgPurple);
orangebglabel.addEventListener("click", bgOrange);


//de check op de achtergrond laten reageren
let checkHome = document.getElementById("radioHome");
let checkRood = document.getElementById("radioRood");
let checkBlauw = document.getElementById("radioBlauw");
let checkGeel = document.getElementById("radioGeel");
let checkGroen = document.getElementById("radioGroen");
let checkPaars = document.getElementById("radioPaars");
let checkOranje = document.getElementById("radioOranje");