let veiksmas
veiksmas = prompt("Įveskite kokį veiksmą norite atlikti");

let x;
x = + prompt("Įveskite pirmąjį skaičių");

let y;
y = + prompt("Įveskite antąjį skaičių");

let atsakymas = veiksmoAtlikimas(veiksmas, x, y);
alert (atsakymas);


function veiksmoAtlikimas(veiksmas, pirmasSkaicius, antrasSkaicius){
    if (veiksmas == "sudetis"){
        return (pirmasSkaicius + antrasSkaicius);
    }
    else if (veiksmas == "atimtis"){
        return (pirmasSkaicius - antrasSkaicius);
    }
    else if (veiksmas == "daugyba"){
        return (pirmasSkaicius * antrasSkaicius);
    }
    else if (veiksmas == "dalyba"){
        return (pirmasSkaicius / antrasSkaicius);
    }
    else {
        return false;
    }
}
