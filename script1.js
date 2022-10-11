let x;
x = + prompt("Įveskite skaičių");

let skaicius = arLyginis(x);

function arLyginis(num){
    return num % 2;
}

if (skaicius == 0){
    alert("skaičius yra lyginis");
}
else {
    alert("skaičius yra nelyginis");
}
