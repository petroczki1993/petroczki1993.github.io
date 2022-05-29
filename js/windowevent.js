//Window event 1.
//HTML script-be ágyazás

//Window event 2.
//hátránya: csak egy eseménykezelő lehet
let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.onclick = function() {
    alert("Hello JS!");
}

//Nem kell (), mert azt a függvény számolja ki.
let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.onclick = calcAmount;


//Window event 3.
//Előny: Több eseménykezelő is futtatható pl. calcAmount fv.
let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.addEventListener("click", function() {
    alert("Hello JS!");
});

//Windows event - Lap átmérezetés
window.addEventListener("resize",function() {
    console.log(this.innerHeight, this.innerWidth);
})