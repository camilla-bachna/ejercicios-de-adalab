"use strict";

function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un perro";
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

function getChihuahuaImage() {
  fetch("https://dog.ceo/api/breed/eskimo/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Otro perro";
    });
}

const btn2 = document.querySelector(".js-eskimo");
btn2.addEventListener("click", getChihuahuaImage);
