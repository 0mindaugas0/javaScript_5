let x;
x = + prompt("Įveskite skaičių");

let skaicius = arDalinasiIsPenkiu(x);

function arDalinasiIsPenkiu(num){
    return num % 5;
}
if (skaicius == 0){
    alert("skaicius dalinasi iš 5");
}

else{
    alert("skaičius nesidalina iš 5");
}