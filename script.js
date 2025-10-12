var f = document.getElementById("frog");
var f2 = document.getElementById("frog2");
f.addEventListener("mousedown", Hide);
f.addEventListener("mouseup", Show);

window.addEventListener("load", function(){
    f2.style.opacity = "0";
})

f.addEventListener("contextmenu", e => e.preventDefault());
f.addEventListener("dragstart", e => e.preventDefault());

f.addEventListener("pointerdown", Hide);
f.addEventListener("pointerup", Show);
f.addEventListener("pointercancel", Show);

function Hide() {
    //console.log("frog gone :o");
    f.style.opacity = "0";
    f2.style.opacity = "1";
}

function Show() {
    //console.log("frog again :D");
    f.style.opacity = "1";
    f2.style.opacity = "0";
}
