var fullscreen = true;
var s1 = true;
var s2 = false;

let con1 = document.getElementsByClassName("container")[0];
con1.style.backgroundImage = 'url("background.jpg")';

let con2 = document.getElementsByClassName("container2")[0];
con2.style.backgroundColor = "rgba(255,255,255,0.3)";

let menu = document.getElementsByClassName("menu")[0];

let schermo1 = document.getElementById("a");
let schermo2 = document.getElementById("b");

function displayMenu() {
    schermo1.style.animationName = "appear1";
    schermo1.style.animationDelay = "0s"
    schermo1.style.animationFillMode = "forwards";
    schermo2.style.animationName = "appear2";
    schermo2.style.animationDelay = "0.3s"
    schermo2.style.animationFillMode = "forwards";
}

function hideMenu() {
    schermo1.style.animationName = "disappear1";
    schermo1.style.animationDelay = "0.3s"
    schermo1.style.animationFillMode = "backwards";
    schermo2.style.animationName = "disappear2";
    schermo2.style.animationDelay = "0s"

}

document.getElementsByTagName("button")[0].addEventListener("click", function(e) {

    e.preventDefault();

    if (fullscreen && s1) {
        console.log("fullscreen and s1")
        con1.style.animationName = "move";
        con2.style.animationName = "move2";

        displayMenu();

        fullscreen = false;
    }

    else if (fullscreen && s2) {
        console.log("fullscreen and s2")
        con1.style.animationName = "move2";
        con2.style.animationName = "move";

        displayMenu();

        fullscreen = false;
    }

    else if(!fullscreen && s1){
        console.log("!fullscreen and s1")

        hideMenu();
        
        setTimeout(function () {
        con2.style.animationName = "moveback2";
        con1.style.animationName = "moveback";
        }, 600);
        fullscreen = true;
    }
    else if(!fullscreen && s2){
        console.log("!fullscreen and s2")
        
        hideMenu();

        setTimeout(function () {
            con1.style.animationName = "moveback2";
            con2.style.animationName = "moveback";
        }, 600);
        fullscreen = true;
    }
    
})


schermo1.addEventListener("click", function (e) {
    e.preventDefault();
    hideMenu();

    if (!s1 && !fullscreen) {
        
        con2.style.animationName = "movebackward";
        con2.style.animationDuration = "1s";
        con1.style.animationName = "moveforward2";
        con1.style.animationDuration = "1s";

        setTimeout(function () {
            con2.style.backgroundImage = "none";
            con2.style.backgroundColor = "rgba(255,255,255,0.3)";
            con1.style.backgroundImage = 'url("background.jpg")';
        }, 550);

    setTimeout(function () {
        con2.style.zIndex = "49";
        con1.style.zIndex = "50";
        con2.style.animationName = "moveback2";
        con2.style.animationDuration = "0.5s";
        con1.style.animationName = "moveback";
        con1.style.animationDuration = "0.5s";
        
    }, 1050)
        

        s1 = true;
        s2 = false;
        fullscreen = true;
    }

    else if (s1 && !fullscreen) {
        setTimeout(function () {
        con1.style.animationName = "moveback";
        con2.style.animationName = "moveback2";
        }, 600);    
    }

})

schermo2.addEventListener("click", function (e) {
    e.preventDefault();
    hideMenu();
    if (!s2 && !fullscreen) {
        con1.style.animationName = "movebackward";
        con1.style.animationDuration = "1s";
        con2.style.animationName = "moveforward2";
        con2.style.animationDuration = "1s";

        setTimeout(function () {
            con1.style.backgroundImage = "none";
            con1.style.backgroundColor = "rgba(255,255,255,0.3)";
            con2.style.backgroundImage = "linear-gradient(45deg, blue, violet)";
        }, 550);
        
    setTimeout(function () {

        con1.style.zIndex = "49";
        con2.style.zIndex = "50";
        con1.style.animationName = "moveback2";
        con1.style.animationDuration = "0.5s";
        con2.style.animationName = "moveback";
        con2.style.animationDuration = "0.5s";
        
    }, 1050)
        

        s2 = true;
        s1 = false;
        fullscreen = true;
    }

    else if (s2 && !fullscreen) {
        setTimeout(function () {
        con2.style.animationName = "moveback";
        con1.style.animationName = "moveback2";
        }, 600);
    }

})