let x;
x = + prompt("Įveskite X reikšmę");

let y;
y = + prompt("Įveskite Y reikšmę");

let palyginimas = skaiciuPalyginimas(x, y);
alert (palyginimas);


function skaiciuPalyginimas (x,y){
    if ((x * y) > (x + y)){
        return true
    }
    else{
        return false
    }
}