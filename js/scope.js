//Global scope
//let blokk scope-ú változó
//1 blokkon belül létezik a változó, azon kívül nem
let name = "Sanyi";

{
    //lokális scope van, itt már használható a let
    // let name = "Pisti";
    name = "Pisti";
    console.log(name);
}

console.log(name);



// var globalName = "Joe";

// function something() {
//     var globalName = "Jack";
//     console.log(globalName);
// }

// something();

// console.log(globalName);