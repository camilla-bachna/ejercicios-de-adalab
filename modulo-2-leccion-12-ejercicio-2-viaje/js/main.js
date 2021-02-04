'use strict';
const containerElement = document.querySelector('.js-container');
const buttonElement = document.querySelectorAll('.js-city');
const inputElement = document.querySelector('.js-input');

//create images

//Madrid

const newImg = document.createElement('img');

newImg.src = './images/madrid.jpg';

newImg.style.width = '250px';
newImg.style.margin = '10px';

//Vienna

const newImg2 = document.createElement('img');

newImg2.src = './images/vienna.jpg';

newImg2.style.width = '250px';
newImg2.style.margin = '10px';

function handleCity(ev) {
  console.log(ev.target.value);
  const city = ev.target.value;
  //here only 2 posiblities thats why else is fine, otherwise else if
  if (city === 'Madrid') {
    containerElement.appendChild(newImg);
    containerElement.removeChild(newImg2);
  } else {
    containerElement.appendChild(newImg2);
    containerElement.removeChild(newImg);
  }
}

for (const city of buttonElement) {
  city.addEventListener('change', handleCity);
}

/* 'use strict';
const containerElement = document.querySelector('.js-container');
const buttonMadrid = document.querySelector('.js-Madrid');
const buttonVienna = document.querySelector('.js-Vienna');
const inputElement = document.querySelector('.js-input');

//create images

//Madrid

const newImg = document.createElement('img');

newImg.src = './images/madrid.jpg';

newImg.style.width = '250px';
newImg.style.margin = '10px';

//Vienna

const newImg2 = document.createElement('img');

newImg2.src = './images/vienna.jpg';

newImg2.style.width = '250px';
newImg2.style.margin = '10px';

function userClickMadrid() {
  buttonMadrid.checked = true;
  buttonVienna.checked = false;
  containerElement.appendChild(newImg);
  containerElement.removeChild(newImg2);
}

function userClickVienna() {
  buttonMadrid.checked = false;
  buttonVienna.checked = true;
  containerElement.appendChild(newImg2);
  containerElement.removeChild(newImg);
}

buttonMadrid.addEventListener('click', userClickMadrid);
buttonVienna.addEventListener('click', userClickVienna);
 */
