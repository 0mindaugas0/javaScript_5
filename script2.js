let x;
x = + prompt("Įveskite skaičių");

let skaicius = arDalinasiIsPenkiu(x);
alert(skaicius);
alert("Jeigu true - skaičius dalinasi iš 5, jeigu false - ne");

function arDalinasiIsPenkiu(num){
    if (num % 5 == 0){
        return true;
    }
    else{
        return false;
    }
}