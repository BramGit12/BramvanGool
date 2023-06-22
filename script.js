window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

let selected = null;
function ClickLeft() {
    selected = "music";
    document.getElementById("bgright").classList.add("unselected");
    document.getElementById("bgleft").classList.add("selected");
    document.getElementById("subtitle").innerHTML = "Music";
    document.getElementById("musiccard").classList.add("fadeout");
    document.getElementById("continueleft").classList.add("fadeout");
    document.getElementById("coding").classList.add("dnone");
    document.getElementById("music").classList.remove("dnone");
    Continue();
    setTimeout(Scroll, 2000);
}
function ClickRight() {
    selected = "coding";
    document.getElementById("bgleft").classList.add("unselected");
    document.getElementById("bgleft").classList.add("unselected");
    document.getElementById("subtitle").innerHTML = "Coding & Design";
    document.getElementById("codingcard").classList.add("fadeout");
    document.getElementById("continueright").classList.add("fadeout");
    document.getElementById("music").classList.add("dnone");
    document.getElementById("coding").classList.remove("dnone");
    Continue();
    setTimeout(Scroll, 2000);
}

function Scroll(){
    window.scrollTo({ top: screen.height*0.9
        , behavior: 'smooth' });
}

function Continue() {
    document.getElementById("bgleft").classList.add("nohover");
    document.getElementById("bgright").classList.add("nohover");
    document.getElementById("html").classList = "scroll";
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

