'use strict';

const inputElement = document.querySelector('.js-input');
const buttonElement = document.querySelector('.js-button');
const resultElement = document.querySelector('.js-results');

function searchPeople() {
  const input = inputElement.value;
  console.log(input);
  fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((data) => {
      for (let i in data.results) {
        console.log(i);
        let nameCaracter = data.results[i].name;
        let hairColor = data.results[i].hair_color;
        if (nameCaracter.includes(input)) {
          resultElement.innerHTML += `The starwars caracter(s) is/are ${nameCaracter} and the haircolor is ${hairColor}.`;
        }
        if (hairColor.includes(input)) {
          resultElement.innerHTML += `The starwars caracter(s) is/are ${nameCaracter} and the haircolor is ${hairColor}.`;
        }
      }
    });
}

buttonElement.addEventListener('click', searchPeople);
