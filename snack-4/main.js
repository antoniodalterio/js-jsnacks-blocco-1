'use strict';

//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
//  Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50. * \

const numeri = [];
let somma = 0;
while (somma < 50) {
  const numeriUtente = Number(prompt('scrivi un numero'));
  numeri.push(numeriUtente);
  somma += numeriUtente;
  console.log(numeri);
  console.log(somma);
}
