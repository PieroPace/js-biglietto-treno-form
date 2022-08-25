// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
const eta = parseInt(prompt('Indica la tua età'));
const chilometri = parseInt(prompt('Indica quanti chilometri vuoi percorrere'));

console.log('Età passeggero: ' + eta);
console.log('Km passeggero: ' + chilometri);
document.writeln('Età passeggero: ' + eta + '</br>');
document.writeln('Km passeggero: ' + chilometri + '</br>');


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
let prezzo = 0.21 * chilometri;
let sconto = 0;

console.log('Prezzo senza sconto: ' + prezzo.toFixed(2));
document.writeln('Prezzo senza sconto: ' + prezzo.toFixed(2) + '</br>');

// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.

if (eta < 18) {
    console.log('Sconto applicato del 20%');
    document.writeln('Sconto applicato del 20%</br>');
    sconto = ((prezzo * 20) / 100);
    prezzo = prezzo - sconto;
} else if (eta > 65) {
    console.log('Sconto applicato del 40%');
    document.writeln('Sconto applicato del 40%</br>');
    sconto = ((prezzo * 40) / 100);
    prezzo = prezzo - sconto;
} else {
    console.log('Nessuno sconto applicato');
    document.writeln('Nessuno sconto applicato</br>');
}

// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).

console.log('Prezzo biglietto: ' + prezzo.toFixed(2));
document.writeln('Prezzo biglietto: ' + prezzo.toFixed(2));