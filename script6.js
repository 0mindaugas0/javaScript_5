let a;
a = + prompt("Įveskite pirmąjį sakičių");

let b;
b = + prompt("Įveskite antrąjį skaičių");

let c;
c = + prompt("Įveskite trečiąjį skaičių");

let atsakymas = didziausioRadimas(a, b, c);
alert (atsakymas);


function didziausioRadimas (skaicius1, skaicius2, skaicius3){
    if (skaicius1 == skaicius2 && skaicius2 == skaicius3){
        return 0;
    }
    else if (skaicius1 > skaicius2 && skaicius1 > skaicius3){
        return 1;
    }
    else if (skaicius2 > skaicius1 && skaicius2 > skaicius3){
        return 2;
    }
    else{
        return 3;
    }

}