'use strict';

const inputElement = document.querySelector('.js-first-name');
const lastNameElement = document.querySelector('.js-last-name');
const resultElement = document.querySelector('.js-result1');
const resultElement2 = document.querySelector('.js-result2');

function inputPeople() {
  const input = inputElement.value;
  const lastName = lastNameElement.value;

  //print result
  resultElement.innerHTML = input;
  resultElement2.innerHTML = lastName;

  //store in local storage with name and value
  localStorage.setItem('name', input);
  localStorage.setItem('lastName', lastName);
}

inputElement.addEventListener('keyup', inputPeople);
lastNameElement.addEventListener('keyup', inputPeople);

//get name from local storage and add it in input and paragraph
const nameInput = localStorage.getItem('name');
const lastNameInput = localStorage.getItem('lastName');

console.log(nameInput);
console.log(lastNameInput);

inputElement.value = nameInput;
resultElement.innerHTML = nameInput;
lastNameElement.value = lastNameInput;
resultElement2.innerHTML = lastNameInput;
