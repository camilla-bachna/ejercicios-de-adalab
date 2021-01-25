"use strict";

const buttonElement = document.querySelector('.js-event');

function handleButtonClick() {
  console.log("Hola");
}

buttonElement.addEventListener('click', handleButtonClick);