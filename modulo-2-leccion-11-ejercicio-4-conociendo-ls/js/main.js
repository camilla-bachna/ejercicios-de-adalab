'use strict';

const inputElement = document.querySelector('.js-input');
const resultElement = document.querySelector('.js-results');

function inputPeople() {
  const input = inputElement.value;

  //print result
  resultElement.innerHTML = input;

  //store in local storage with name and value
  localStorage.setItem('name', input);
}

inputElement.addEventListener('keyup', inputPeople);

//get name from local storage and add it in input and paragraph
const nameInput = localStorage.getItem('name');
console.log(nameInput);
inputElement.value = nameInput;
resultElement.innerHTML = nameInput;
