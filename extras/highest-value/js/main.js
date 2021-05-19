'use strict';

const containerElement = document.querySelector('.js-container');

const array = [10, 2, 40, 30, 4, 6, 8, 1, 5];

/* paint result */
let htmlCode = '';
let indexArray;
let maxValue = 0;

function getMaxValue(input) {
  for (indexArray = 0; indexArray < input.length; indexArray++) {
    if (input[indexArray] > maxValue) {
      maxValue = input[indexArray];
    }
  }
  return maxValue;
}

htmlCode += `<p>"The highest value of the array is: ${getMaxValue(array)} </p>`;

containerElement.innerHTML = htmlCode;

console.log(getMaxValue(array));
