'use strict';
const containerElement = document.querySelector('.js-container');

//text.charAt[i]
let htmlCode = '';
let orderedCharacters = '';
let indexOfOrderedCharacters;

function palindrome(string) {
  for (
    indexOfOrderedCharacters = string.length - 1;
    indexOfOrderedCharacters >= 0;
    indexOfOrderedCharacters--
  ) {
    orderedCharacters += string[indexOfOrderedCharacters];
  }
  return orderedCharacters;
}

htmlCode += `<p>The reversed word "Hola" is: ${palindrome('hola')}</p>`;
containerElement.innerHTML = htmlCode;

console.log(palindrome('hola'));
