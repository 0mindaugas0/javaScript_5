let x;
x = + prompt("Įveskite skaičių");

alert("jeigu true tai skaičius yra lyginis, jeigu false tai skaičius nėra lyginis");

let skaicius = arLyginis(x);
alert(skaicius);


function arLyginis(skaicius){
    if (skaicius %2 == 0){
        return true;
    }
    else {
        return false;
    }
}
