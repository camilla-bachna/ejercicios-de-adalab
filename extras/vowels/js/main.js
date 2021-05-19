'use strict';

const containerElement = document.querySelector('.js-container');

/* paint result */
let htmlCode = '';
let indexArray;
let count = 0;

function getVowels(input) {
  for (indexArray = 0; indexArray < input.length; indexArray++) {
    if (
      input[indexArray] === 'a' ||
      input[indexArray] === 'e' ||
      input[indexArray] === 'i' ||
      input[indexArray] === 'o' ||
      input[indexArray] === 'u'
    ) {
      count += 1;
    }
  }
  return count;
}

htmlCode += `<p>"There are ${getVowels(
  'coche'
)} vowels in the word "coche"</p>`;

containerElement.innerHTML = htmlCode;

console.log(getVowels('coche'));
