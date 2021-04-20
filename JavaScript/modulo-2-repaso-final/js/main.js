'use strict';

const inputElement = document.querySelector('.js-input');
const palettesContainer = document.querySelector('.js-container');
const form = document.querySelector('.js-form');

let palettes = []; //have to create it outside because I want to use it later in function paintPalletes()

function dataFromAPI() {
  fetch(
    'https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json'
  )
    .then((response) => response.json())
    .then((data) => {
      palettes = data.palettes;

      paintPalletes();
      dataInlocalStorage();
    });
}

//loacl Storage

function dataInlocalStorage() {
  const stringPalettes = JSON.stringify(palettes);
  localStorage.setItem('palettes', stringPalettes);
  //In localStorage we can only store data of primitive type - number, string, boolean. If we want to store an array or an object use JSON.stringify.
}
function datafromloacalStorage() {
  const palettesLocalStoarge = localStorage.getItem('palettes');
  if (palettesLocalStoarge === null) {
    dataFromAPI();
  } else {
    const arrayPalettesFromStorage = JSON.parse(palettesLocalStoarge);
    palettes = arrayPalettesFromStorage;
    //The contrary action: To pass from a string containing object information to a JavaScript object we use JSON.parse.
    paintPalletes();
  }

  console.log(palettes);
}

//filter with palette name

function handleFilter() {
  paintPalletes();
}

inputElement.addEventListener('keyup', handleFilter);

//filter palette with click

/* function handleClick() {
  paintPalletes();
}

paletteContainer.addEventListener('click', handleClick);
 */
//paint pallettes

function paintPalletes() {
  let htmlCode = '';
  htmlCode += '<ul>';
  for (const palette of palettes) {
    const paletteName = palette.name;
    if (paletteName.includes(inputElement.value)) {
      /*  console.log(paletteName); */
      htmlCode += '<li class="list">';
    } else {
      htmlCode += '<li class="list palette-hidden">';
    }
    htmlCode += `<h3>${paletteName}</h3>`;
    htmlCode += '<div class="js-click" style="border:grey 5px solid">';
    //const paletteContainer = document.querySelector('.js-click');

    for (const color of palette.colors) {
      /* console.log(color); */
      htmlCode += `<div class="color__item" style="background-color:#${color}"></div>`;
    }
    htmlCode += '</div>';
    htmlCode += '</li>';
  }
  htmlCode += '</ul>';
  palettesContainer.innerHTML = htmlCode;
}

//sumbit form prevent defalut

function handleDefault(ev) {
  ev.preventDefault();
}

form.addEventListener('submit', handleDefault);

datafromloacalStorage();
