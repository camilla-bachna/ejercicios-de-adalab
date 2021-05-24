'use strict';

// condición ? expr1 : expr2

/* 
let avocados;
if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0; 
}*/

const avocadoPrice = 1.5;
const money = 30;

let avocados = money >= avocadoPrice ? money / avocadoPrice : 0;

console.log(avocados);
