window.onload = OnLoad;
function OnLoad() {
    setTimeout(RemoveClass, 2600);
}

function RemoveClass() {
    if (document.getElementById("head").classList == "moveoutup") {
        document.getElementById("head").classList = "moveoutup";
        return;
    }
    document.getElementById("head").classList = "";
}

let selected = null;
let scrolling = false;
function ClickLeft() {
    selected = "music";
    document.getElementById("musiccard1").classList = "card"
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
    document.getElementById("arrowdown").classList.add("fadeinarrow");
}
function ClickRight() {
    selected = "coding";
    document.getElementById("codingcard1").classList = "card"
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
    document.getElementById("arrowdown").classList.add("fadeinarrow");
}
let i = 1;
function NextCard() {
    if (selected == "music") {
        switch (i) {
            case 1:
                NextAnimation("musiccard1", "musiccard2")
                i++;
                break;
            case 2:
                NextAnimation("musiccard2", "musiccard3")
                i++;
                break;
            case 3:
                NextAnimation("musiccard3", "card4")
                i++;
                break;
            case 4:
                NextAnimation("card4", "card5")
                i++;
                break;
            default:
                break;
        }
    }
    else{
        switch (i) {
            case 1:
                NextAnimation("codingcard1", "codingcard2")
                i++;
                break;
            case 2:
                NextAnimation("codingcard2", "codingcard3")
                i++;
                break;
            case 3:
                NextAnimation("codingcard3", "card4")
                i++;
                break;
            case 4:
                NextAnimation("card4", "card5")
                i++;
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
                document.getElementById("arrowup").classList = "";
                document.getElementById("arrowdown").classList = "";
                selected = null;
                i = 1;
                break;
            case 2:
                PreviousAnimation("musiccard2", "musiccard1")
                i--;
                break;
            case 3:
                PreviousAnimation("musiccard3", "musiccard2")
                i--;
                break;
            case 4:
                PreviousAnimation("card4", "musiccard3")
                i--;
                break;
            default:
                break;
        }
    }else
    {
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
            document.getElementById("arrowup").classList = "";
            document.getElementById("arrowdown").classList = "";
            selected = null;
            i = 1;
            break;
        case 2:
            PreviousAnimation("codingcard2", "codingcard1")
            i--;
            break;
        case 3:
            PreviousAnimation("codingcard3", "codingcard1")
            i--;
            break;
        case 4:
            PreviousAnimation("card4", "codingcard3")
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
}

function PreviousAnimation(oldcard, newcard) {
    document.getElementById(oldcard).classList = "card"
    document.getElementById(newcard).classList = "card"
    document.getElementById(oldcard).classList.add("moveoutdown");
    document.getElementById(newcard).classList.add("movedown");
}

let lastKnownScrollPosition;
document.addEventListener("wheel", function (e) {
    lastKnownScrollPosition = e.deltaY;
    if (selected == null) { return; }
    if (scrolling == true) { return; }
    if (lastKnownScrollPosition > 0) {
        NextCard();
        scrolling = true;
        setTimeout(ScrollFalse, 1800);
        return;
    }
    PreviousCard();
    scrolling = true;
    setTimeout(ScrollFalse, 1800);
    return;
})

function ScrollFalse() {
    scrolling = false;
}