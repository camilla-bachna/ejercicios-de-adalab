'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

/* const pinNumber = users.find((user) => user.pin === 5232);

console.log(pinNumber); 
//Prints the whole object with name, isPremium, pin, etc */

const pinNumber = users.findIndex((user) => user.pin === 5232);

console.log(pinNumber);
//Prints 3 in console

const activeUsers = users.splice(3, 1);
console.log(users);
