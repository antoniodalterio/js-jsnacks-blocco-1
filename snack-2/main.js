'use strict';

const parolaPrima = prompt('inserisci una parola');
const parolaSeconda = prompt('inserisci una parola');

if (parolaPrima.length > parolaSeconda.length) {
  console.log(parolaSeconda + ' ' + parolaPrima);
} else if (parolaSeconda.length > parolaPrima.length) {
  console.log(parolaPrima + ' ' + parolaSeconda);
}
