"use strict";

//element HTML

const inputName = document.querySelector('.js-name');
const button = document.querySelector('.js-click');

//handler

function clickButton(){
  console.log(`Hola ${inputName.value}`);
}

// listener on the element, with event type and handler
button.addEventListener('click', clickButton);