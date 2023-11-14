'use strict';
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

const numeroUtente = Number(prompt('inserisci numero'));

for (let i = 1; i < numeroUtente; i++) {
  const contenitore = [];

  for (let y = 0; y < 10; y++) {
    const numeroGenerato = Math.floor(Math.random() * 100 + 1);
    contenitore.push(numeroGenerato);
  }

  console.log(contenitore);
  alert(`array ${i}: ${contenitore}`);
}
