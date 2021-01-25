"use strict";

const addObject = document.querySelector('.js-paragraph');

const adalaber1 = {
  nameAdalaber: "Susana",
  age: 34,
  job: "periodista",
  distance: 50,
};

adalaber1.run = phrase => `Yo digo: ${phrase}`;
adalaber1.runAMarathon = phrase2 => `Yo digo: ${phrase2}`;

const adalaber2 = {
  nameAdalaber: "Rocío",
  age: 25,
  job: "actriz",
};

addObject.innerHTML = `Mi nombre es ${adalaber1.nameAdalaber}, tengo ${adalaber1.age} años y soy ${adalaber1.job}. `;

console.log(adalaber1.run('Estoy corriendo'));
console.log(adalaber1.runAMarathon(`Estoy corriendo un maratón de ${adalaber1.distance} kilómetros`));

addObject.innerHTML += `Mi nombre es ${adalaber2.nameAdalaber}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;