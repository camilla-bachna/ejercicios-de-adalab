'use strict';

function getEl(a) {
  if (a === '') {
    console.log(`El selector no puede estar vacío`);
  } else {
    const elementDebbugger = document.querySelector(a);
    if (elementDebbugger === null) {
      console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`);
    } else {
      return elementDebbugger;
    }
  }
}

const headingEl = getEl('.heading');
const greetingEl = getEl('#greeting');
const textEl = getEl('text');
const btnEl = getEl('.btn');

headingEl.innerHTML = 'Hola';
greetingEl.innerHTML = 'Que tal estas?';
textEl.innerHTML =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, impedit excepturi repellat fuga nostrum, doloribus ut delectus qui nulla voluptatibus rem velit quisquam. Expedita, aperiam consequatur. Officiis eveniet alias voluptate.';
btnEl.innerHTML = 'Púlsame';

console.log(getEl(a));
/* console.log(getEl('heading'));
console.log(getEl('#greeting'));
console.log(getEl('.text'));
console.log(getEl('.btn')); */
