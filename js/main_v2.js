
//CleanCode
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


// function calcAmount () {
//     let price = 1000;
//     let amountInput = document.querySelector("input[name='amount-input']");
//     let showAmount = document.querySelector("span.show-amount");
//     let amountNumber = parseInt(amountInput.value);
//     //három operandusos kifejezés
//     //így kezeljük le, ha üresen hagyja a felhasználó a megrendelést
//      amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
//     if(amountNumber > 10) {
//         alert("Maximum 10 terméket vásáorolhat");
//         //return; --> függvény visszatér
        
//     } else if(amountNumber < 1) {
//         alert("Minimum 1 terméket kell vásárolnia");
//     } else {

//         let amount = parseInt(amountInput.value)*price;
    
//         showAmount.innerHTML = amount;
//     }
// }

// function calcAmount () {
//     let price = 1000;
//     let amountInput = document.querySelector("input[name='amount-input']");
//     let showAmount = document.querySelector("span.show-amount");
//     let amountNumber = parseInt(amountInput.value);

//     if(amountNumber > 10) {
//         alert("Maximum 10 terméket vásáorolhat");
//         //return; --> függvény visszatér
        
//     } else if(amountNumber < 1) {
//         alert("Minimum 1 terméket kell vásárolnia");
//     } else {

//         let amount = parseInt(amountInput.value)*price;
    
//         showAmount.innerHTML = amount;
//     }
// }


// function calcAmount () {
//     let price = 1000;
//     let amountInput = document.querySelector("input[name='amount-input']");
//     let showAmount = document.querySelector("span.show-amount");
//     let amount = parseInt(amountInput.value)*price;

//     showAmount.innerHTML = amount;

// }

// function calcAmount () {
//     let price = 1000;
//     let amountInput = document.querySelector("input[name='amount-input']");
//     let amount = parseInt(amountInput.value)*price;
//     //felugró ablakban jelenik meg
//     alert("Fizetendő: " + amount + "Ft");
// }
