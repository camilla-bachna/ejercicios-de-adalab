"use strict";

//element HTML

const button = document.querySelector('.js-changeText');

//handler

function changeText(){
  /* console.log('Alerta'); */
  button.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!'; 
}

// listener on the element, with event type and handler
button.addEventListener('click', changeText);