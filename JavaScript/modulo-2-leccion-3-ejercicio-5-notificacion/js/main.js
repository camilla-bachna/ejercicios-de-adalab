'use strict';

const containerElement = document.querySelector('.js-container');
const headingElement = document.querySelector('.js-heading');
const textElement = document.querySelector('.js-text');

if (containerElement.classList.contains('warning')) {
  headingElement.innerHTML = 'AVISO';
  textElement.innerHTML = 'Tenga cuidado';
} else if (containerElement.classList.contains('error')) {
  headingElement.innerHTML = 'ERROR';
  textElement.innerHTML = 'Ha surgido un error';
} else if (containerElement.classList.contains('success')) {
  headingElement.innerHTML = 'CORRECTO';
  textElement.innerHTML = 'Los datos son correctos';
}
