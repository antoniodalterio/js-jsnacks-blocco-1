'use strict';

const numeroArray = [];
let somma = 0;

for (let i = 1; i < 11; i++) {
  const numeroDichiarato = Number(prompt(`${i} scrivi un numero`));
  somma += numeroDichiarato;
}

console.log(`il totale è ${somma}`);
