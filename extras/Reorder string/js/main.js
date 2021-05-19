'use strict';

const containerElement = document.querySelector('.js-container');

const characters = 'comoseradarconnekgikisv...';
/* "Cómo será dar con Nekgikis V..." without spacing, capital letters and accents */

const positionNumbers = [
  23,
  24,
  25,
  18,
  19,
  5,
  6,
  7,
  20,
  15,
  17,
  8,
  10,
  11,
  4,
  3,
  12,
  2,
  16,
  14,
  9,
  21,
  0,
  1,
  13,
  22,
];

let charactersOrdered = '';
let indexOfCharactersOrdered;
let indexOfPositionNumbers;

/* paint result */
let htmlCode = '';
/* bucle to add each ordered character*/
for (
  indexOfCharactersOrdered = 0;
  indexOfCharactersOrdered < positionNumbers.length;
  indexOfCharactersOrdered++
) {
  /* bucle to loop through the array positionNumbers and find the target*/
  for (
    indexOfPositionNumbers = 0;
    indexOfPositionNumbers < positionNumbers.length;
    indexOfPositionNumbers++
  ) {
    /* if the content of the array positionNumber equals the index of charactersOrdered, add it to the string of the ordered characters */
    if (positionNumbers[indexOfPositionNumbers] === indexOfCharactersOrdered) {
      charactersOrdered = charactersOrdered.concat(
        characters[indexOfPositionNumbers]
      );
    }
  }
}
htmlCode += `<p>"Cómo será dar con Nekgikis V..." ordered is: </p>`;
htmlCode += `<span>${charactersOrdered}</span>`;
containerElement.innerHTML = htmlCode;

console.log(charactersOrdered);
