"use strict";

function priceWithIva(a) {
  return (a * 21) / 100;
}


let priceIva = 10;
let prices = priceWithIva(10);
let final = priceIva + prices;
  
console.log(`The original price is: ${priceIva}€, The IVA is: ${prices}€, The final amount is: ${final}€`);

priceIva = 128;
prices = priceWithIva(128);
final = priceIva + prices;
  
console.log(`The original price is: ${priceIva}€, The IVA is: ${prices}€, The final amount is: ${final}€`);

priceIva = 2083;
prices = priceWithIva(2083);
final = priceIva + prices;
  
console.log(`The original price is: ${priceIva}€, The IVA is: ${prices}€, The final amount is: ${final}€`);