let a;
a = + prompt("Įveskite pirmą trikamio kraštinę");

let b;
b = + prompt("Įveskite antrą trikampio kraštinę");

let c;
c = + prompt("Įveskite trečią trikampio kraštinę");

alert("Jeigu true tai trikampis statusis, jeigu false tuomet ne");

let atsakymas = arStatusis(a, b, c);
alert(atsakymas);


function arStatusis (a, b, c){
    if (c * c == a * a + b * b){
        return true;
    } 
    else{
        return false
    }
}