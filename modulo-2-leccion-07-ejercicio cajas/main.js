'use strict';

const boxElement = document.querySelector ('.box');
const contentElement = document.querySelector ('.content');


const allElement = document.querySelector('.matrix');
let numberElement = document.querySelector('.number');
const number = parseInt (numberElement);

for (let i=1; i<20; i++){
    const content = '<article class=box><h2 class="content">Caja<span class="name">1</span></h2></article>';

    allElement.innerHTML += content;
}

for (let indx=1; indx<20; indx++){
    number.innerHTML ++;
}