'use strict';

const numbers = [1, 2, 3];
const listElement = document.querySelector('.js-list');

//create element
const newItem = document.createElement('li');
const newItem2 = document.createElement('li');
const newItem3 = document.createElement('li');

//create new element
/* for (let index = 0; index < 3; index++) {
  const newItem = document.createElement('li');
  console.log(newItem);
}
 */

//create content
const newContent = document.createTextNode('1');
const newContent2 = document.createTextNode('2');
const newContent3 = document.createTextNode('3');

console.log(numbers[1]);

//add content to element
newItem.appendChild(newContent);
newItem2.appendChild(newContent2);
newItem3.appendChild(newContent3);

//add element to DOM
listElement.appendChild(newItem);
listElement.appendChild(newItem2);
listElement.appendChild(newItem3);

//Bucle for of - array
/*  for (const number of numbers) {
  console.log(number);
} */
/* for (let number = 0; number < numbers.length; number++) {
  console.log(numbers[number]);
} */
