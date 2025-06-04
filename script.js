var bulb = document.querySelector("body");

var btn = document.querySelector("#button");

var a = 0;

btn.addEventListener("click", function () {
    if (a == 0) {
        body.style.backgroundColor = "yellow";
        console.log("clicked")
        a = 1;
    } else {
        body.style.backgroundColor = "transparent";
        console.log("un-clicked")
        a = 0;
    }

})