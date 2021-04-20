"use strict";

const addObject = document.querySelector(".js-paragraph");

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

adalaber1.showBio = function () {
  return "Hola, mi nombre es " + this.nameAdalaber + ", tengo " + this.age + " años y soy " + this.job;
};

console.log(adalaber1.showBio());

adalaber2.showBio = function () {
  return "Hola, mi nombre es " + this.nameAdalaber + ", tengo " + this.age + " años y soy " + this.job;
};

console.log(adalaber2.showBio());

