'use strict';

function getEl(a) {
  return document.querySelector(a);
}

const headingEl = getEl('.heading');
const greetingEl = getEl('.greeting');
const textEl = getEl('.text');
const btnEl = getEl('.btn');

headingEl.innerHTML = 'Hola';
greetingEl.innerHTML = 'Que tal estas?';
textEl.innerHTML =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, impedit excepturi repellat fuga nostrum, doloribus ut delectus qui nulla voluptatibus rem velit quisquam. Expedita, aperiam consequatur. Officiis eveniet alias voluptate.';
btnEl.innerHTML = 'Púlsame';
