let x;
x = + prompt("Įveskite skaičių X");

let y;
y = + prompt("Įveskite skaičių Y");

alert ("Jeigu -1 tai X yra didesnis už Y, jeigu 0 tai skaičiai yra lygūs, jeigu 1 tai didesnis Y");

let rezultatas = skaiciuPalyginimas(x,y);
console.log(rezultatas);


function skaiciuPalyginimas (x,y){
    if (x > y){
        return (-1);
    }
    else if (x == y){
        return 0;
    }
    else{
        return 1;
    }
}
