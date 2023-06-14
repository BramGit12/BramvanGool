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
        document.getElementById("musiccard1").classList = "card";
        document.getElementById("bgright").classList.add("unselected");
        document.getElementById("bgleft").classList.add("selected");
        document.getElementById("bgright").classList.add("nohover");
        document.getElementById("bgleft").classList.add("nohover");
        document.getElementById("subtitle").innerHTML = "Music";
        document.getElementById("musiccard1").classList.add("firstmoveup");
        document.getElementById("head").classList = "moveoutup";
        document.getElementById("musiccard").classList.add("fadeout");
        document.getElementById("continueleft").classList.add("fadeout");
        document.getElementById("arrowup").classList.add("fadeinarrow");
        // document.getElementById("contact").classList = "contactexit";
        document.getElementById("arrowdown").classList.add("fadeinarrow");
        currentcard = "musiccard1";
        scrolling = true;
        setTimeout(ScrollFalse, 3000);
    }
}
function ClickRight() {
    if (scrolling == false) {
        selected = "coding";
        document.getElementById("codingcard1").classList = "card";
        document.getElementById("bgleft").classList.add("unselected");
        document.getElementById("bgright").classList.add("selected");
        document.getElementById("bgright").classList.add("nohover");
        document.getElementById("bgleft").classList.add("nohover");
        document.getElementById("subtitle").innerHTML = "Coding & Design";
        document.getElementById("codingcard1").classList.add("firstmoveup");
        document.getElementById("head").classList = "moveoutup";
        document.getElementById("codingcard").classList.add("fadeout");
        document.getElementById("continueright").classList.add("fadeout");
        document.getElementById("arrowup").classList.add("fadeinarrow");
        // document.getElementById("contact").classList = "contactexit";
        document.getElementById("arrowdown").classList.add("fadeinarrow");
        scrolling = true;
        currentcard = "codingcard1";
        setTimeout(ScrollFalse, 3000);
    }
}
let i = 1;
function NextCard() {
    if (selected == "music") {
        switch (i) {
            case 1:
                NextAnimation("musiccard1", "musiccard2");
                i++;
                break;
            case 2:
                NextAnimation("musiccard2", "musiccard3");
                i++;
                break;
            case 3:
                NextAnimation("musiccard3", "card4");
                i++;
                break;
            case 4:
                SendHome();
                break;
            default:
                break;
        }
    }
    else {
        switch (i) {
            case 1:
                NextAnimation("codingcard1", "codingcard2");
                i++;
                break;
            case 2:
                NextAnimation("codingcard2", "codingcard3");
                i++;
                break;
            case 3:
                NextAnimation("codingcard3", "card4");
                i++;
                break;
            case 4:
                SendHome();
                break;
            default:
                break;
        }
    }
}
function PreviousCard() {
    if (selected == "music") {
        switch (i) {
            case 1:
                document.getElementById("musiccard1").classList = "card"
                document.getElementById("musiccard1").classList.add("moveoutdown");
                document.getElementById("bgright").classList = "smallcontainer";
                document.getElementById("bgleft").classList = "smallcontainer";
                document.getElementById("subtitle").innerHTML = "Music & Coding";
                document.getElementById("head").classList = "";
                document.getElementById("musiccard").classList = "homecard";
                document.getElementById("codingcard").classList = "homecard";
                document.getElementById("continueleft").classList = "continue";
                document.getElementById("continueright").classList = "continue";
                document.getElementById("arrowup").classList = "arrows";
                document.getElementById("arrowdown").classList = "arrows";
                selected = null;
                setTimeout(ScrollFalse, 2000);
                i = 1;
                break;
            case 2:
                PreviousAnimation("musiccard2", "musiccard1");
                i--;
                break;
            case 3:
                PreviousAnimation("musiccard3", "musiccard2");
                i--;
                break;
            case 4:
                PreviousAnimation("card4", "musiccard3");
                i--;
                break;
            default:
                break;
        }
    } else {
        switch (i) {
            case 1:
                document.getElementById("codingcard1").classList = "card"
                document.getElementById("codingcard1").classList.add("moveoutdown");
                document.getElementById("bgright").classList = "smallcontainer";
                document.getElementById("bgleft").classList = "smallcontainer";
                document.getElementById("subtitle").innerHTML = "Music & Coding";
                document.getElementById("head").classList = "";
                document.getElementById("musiccard").classList = "homecard";
                document.getElementById("codingcard").classList = "homecard";
                document.getElementById("continueleft").classList = "continue";
                document.getElementById("continueright").classList = "continue";
                document.getElementById("arrowup").classList = "arrows";
                document.getElementById("arrowdown").classList = "arrows";
                selected = null;
                i = 1;
                setTimeout(ScrollFalse, 2000);
                break;
            case 2:
                PreviousAnimation("codingcard2", "codingcard1");
                i--;
                break;
            case 3:
                PreviousAnimation("codingcard3", "codingcard2");
                i--;
                break;
            case 4:
                PreviousAnimation("card4", "codingcard3");
                i--;
                break;
            default:
                break;
        }
    }
}
function NextAnimation(oldcard, newcard) {
    document.getElementById(oldcard).classList = "card"
    document.getElementById(newcard).classList = "card"
    document.getElementById(oldcard).classList.add("moveoutup");
    document.getElementById(newcard).classList.add("moveup");
    currentcard = newcard;
}

function PreviousAnimation(oldcard, newcard) {
    document.getElementById(oldcard).classList = "card"
    document.getElementById(newcard).classList = "card"
    document.getElementById(oldcard).classList.add("moveoutdown");
    document.getElementById(newcard).classList.add("movedown");
    currentcard = newcard;
}

let lastKnownScrollPosition;
document.addEventListener("wheel", function (e) {
    lastKnownScrollPosition = e.deltaY;
    if (selected == null) { return; }
    if (scrolling == true) { return; }
    if (lastKnownScrollPosition > 0) {
        NextClick();
        return;
    }
    BackClick();
    return;
})

function ScrollFalse() {
    scrolling = false;
    // alert(scrolling);
}

function NextClick() {
    if (scrolling == false) {
        scrolling = true;
        setTimeout(ScrollFalse, 1800);
        NextCard();
    }
}

function BackClick() {
    if (scrolling == false) {
        scrolling = true;
        setTimeout(ScrollFalse, 1800);
        PreviousCard();
    }
}
function Redirect(destination) {
    setTimeout(Collapse, 200)
    if (scrolling == false) {
        scrolling = true;
        if (destination == 'music') {
            SendHome();
            selected = destination;
            i = 1;
            ClickLeft();
            setTimeout(ScrollFalse, 3000);
        }
        else if (destination == 'coding') {
            SendHome();
            selected = destination;
            i = 1;
            ClickRight();
            setTimeout(ScrollFalse, 3000);
        }
        else if (destination == 'home') {
            SendHome();
            setTimeout(ScrollFalse, 3000);
        }
        else if (destination == 'contact') {
            setTimeout(ResetCardsUp, 1000);
            if (selected == null) {
                selected = "music";
                document.getElementById("bgright").classList.add("unselected");
                document.getElementById("bgleft").classList.add("selected");
                document.getElementById("bgright").classList.add("nohover");
                document.getElementById("bgleft").classList.add("nohover");
                document.getElementById("subtitle").innerHTML = "Music";
                document.getElementById("head").classList = "moveoutup";
                document.getElementById("musiccard").classList.add("fadeout");
                document.getElementById("continueleft").classList.add("fadeout");
                document.getElementById("arrowup").classList.add("fadeinarrow");
                document.getElementById("arrowdown").classList.add("fadeinarrow");
                document.getElementById("card4").classList = "card";
                document.getElementById("card4").classList.add("moveup");
                i = 4;
                currentcard = "card4";
                setTimeout(ScrollFalse, 3000);
            }
            else {
                document.getElementById(currentcard).classList = "card moveoutup";
                document.getElementById("card4").classList = "card";
                document.getElementById("card4").classList.add("moveup");

                i = 4;
                currentcard = "card4";
                setTimeout(ScrollFalse, 3000);
            }
        }
    }
}

function ResetCardsUp() {
    document.getElementById("codingcard1").classList = "card moveoutup disable";
    document.getElementById("codingcard2").classList = "card moveoutup disable";
    document.getElementById("codingcard3").classList = "card moveoutup disable";
    document.getElementById("musiccard1").classList = "card moveoutup disable";
    document.getElementById("musiccard2").classList = "card moveoutup disable";
    document.getElementById("musiccard3").classList = "card moveoutup disable";
}
function ResetCardsDown() {
    document.getElementById("codingcard1").classList = "card moveoutdown disable";
    document.getElementById("codingcard2").classList = "card moveoutdown disable";
    document.getElementById("codingcard3").classList = "card moveoutdown disable";
    document.getElementById("musiccard1").classList = "card moveoutdown disable";
    document.getElementById("musiccard2").classList = "card moveoutdown disable";
    document.getElementById("musiccard3").classList = "card moveoutdown disable";

}
let items = document.getElementsByClassName("card");
function SendHome() {
    setTimeout(ResetCardsDown, 2000);
    if (i == 1 && selected != null) {
        PreviousCard();
        return;
    }
    if (selected == "music") {
        for (let index = 0; index < i - 1; index++) {
            items[index].classList = "card disable";
        }
    }
    else if (selected == "coding") {
        for (let index = 4; index < i + 3; index++) {
            items[index].classList = "card disable";
        }
    }
    document.getElementById(currentcard).classList = "card";
    document.getElementById(currentcard).classList.add("moveoutdown");
    document.getElementById("bgright").classList = "smallcontainer";
    document.getElementById("bgleft").classList = "smallcontainer";
    document.getElementById("subtitle").innerHTML = "Music & Coding";
    document.getElementById("head").classList = "";
    document.getElementById("musiccard").classList = "homecard";
    document.getElementById("codingcard").classList = "homecard";
    document.getElementById("continueleft").classList = "continue";
    document.getElementById("continueright").classList = "continue";
    document.getElementById("arrowup").classList = "arrows";
    document.getElementById("arrowdown").classList = "arrows";
    selected = null;
    i = 1;
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

