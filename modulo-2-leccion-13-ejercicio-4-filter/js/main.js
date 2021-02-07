'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

//greeting to all users

let greetingUsers = [];

greetingUsers = users.map((user) => {
  if (user.isPremium === true) {
    return 'Bienvenida ' + user.name + '. Gracias por confiar en nosotros';
  } else {
    return `Bienvenida  ${user.name}`;
  }
});

console.log(greetingUsers);

//create new array with names of premium useres

let premiumUsers = [];

for (const user of users) {
  const premiumClient = user.isPremium;
  if (premiumClient === true) {
    premiumUsers.push(user.name);
  }
}
console.log(premiumUsers);

premiumUsers = users.filter((user) => user.isPremium === true);

console.log(premiumUsers);
