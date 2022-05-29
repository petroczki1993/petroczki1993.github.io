//Új elem hozzáadása a korábbihoz (9.2 doksi)
//Add helptext
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket"
//console.log(helpText);

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

//Eltávolítja az elemet
parent.removeChild(helpText);