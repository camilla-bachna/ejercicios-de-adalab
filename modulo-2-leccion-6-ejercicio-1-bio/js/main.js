"use strict";

const addObject = document.querySelector('.js-paragraph');

const adalaber1 = {
  nameAdalaber: "Susana",
  age: 34,
  job: "periodista",
};

const adalaber2 = {
  nameAdalaber: "Rocío",
  age: 25,
  job: "actriz",
};

addObject.innerHTML = `Mi nombre es ${adalaber1.nameAdalaber}, tengo ${adalaber1.age} años y soy ${adalaber1.job}. `;
addObject.innerHTML += `Mi nombre es ${adalaber2.nameAdalaber}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;