"use strict";

const div = document.querySelector('.js-event');

function handleButtonClick(event) {
  console.log(event.key);
}

div.addEventListener('click', handleButtonClick);