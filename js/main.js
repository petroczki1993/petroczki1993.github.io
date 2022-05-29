function calcAmount () {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
     amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
     showSumPrice(price,amountNumber)

    }
    
function showSumPrice (price = 1000, amountNumber = 1) {
    let showAmount = document.querySelector("span.show-amount");
    if(amountNumber > 10) {
        alert("Maximum 10 terméket vásáorolhat");
    } else if(amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia");
    } else {
        let amount = amountNumber*price;
        showAmount.innerHTML = amount;
    }

}

//Window event
//Előny: Több eseménykezelő is futtatható pl. calcAmount fv.
// let sendButton = document.querySelector("form .btn.btn-primary");
// sendButton.addEventListener("click", function() {
//     alert("Hello JS!");
// });

//Windows event - Lap átmérezetés
window.addEventListener("resize",function() {
    console.log(this.innerHeight, this.innerWidth);
});

//Űrlap események

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit",function(event) {
    //alapvetőenn ha rákattintanak a küldés gombra az oldalon --> lefrissül a böngészőoldal --> js-ek újrabetöltődnek és megszakad a folyamat
    //preventDefault = megelőzi az alapértelmezett működést
    event.preventDefault();
    //console.log(this);

    let inputs = this.querySelectorAll("input");
    let values = {};

    for (let i = 0; i < inputs.length; i++) {
        //values kulcsa az inputs.name
        values[inputs[i].name] = inputs[i].value
    }

    console.log( values );
});