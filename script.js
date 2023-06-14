window.onload = OnLoad;
function OnLoad() {
    setTimeout(RemoveClass, 2600);
}

function RemoveClass() {
    if (document.getElementById("head").classList == "moveoutup") {
        document.getElementById("head").classList = "moveoutup";
        // document.getElementById("contact").classList = "contactexit";
        return;
    }
    // document.getElementById("contact").classList = "";
    document.getElementById("head").classList = "";
}

let selected = null;
let scrolling = false;
let currentcard = null;
function ClickLeft() {
    if (scrolling == false) {
        selected = "music";
        document.getElementById("bgright").classList.add("unselected");
        document.getElementById("bgleft").classList.add("selected");
        document.getElementById("subtitle").innerHTML = "Music";
        document.getElementById("head").classList = "moveoutup";
        document.getElementById("musiccard").classList.add("fadeout");
        document.getElementById("continueleft").classList.add("fadeout");
    }
}
function ClickRight() {
    if (scrolling == false) {
        selected = "coding";
        document.getElementById("bgleft").classList.add("unselected");
        document.getElementById("bgright").classList.add("selected");
        document.getElementById("subtitle").innerHTML = "Coding & Design";
        document.getElementById("head").classList = "moveoutup";
        document.getElementById("codingcard").classList.add("fadeout");
        document.getElementById("continueright").classList.add("fadeout");
    }
}
function Expand() {
    if (document.getElementById("menuicon").classList == "open") {
        document.getElementById("menuicon").classList = "";
        return;
    }
    document.getElementById("menuicon").classList.add("open");
    return;
}

function Collapse() {
    document.getElementById("menuicon").classList = "";
}

