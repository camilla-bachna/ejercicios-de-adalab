"use strict";

const buttonElement = document.querySelector('.js-event');

function handleButtonClick(event) {
  console.log(`Hola ${event.currentTarget}`);
}

buttonElement.addEventListener('click', handleButtonClick);