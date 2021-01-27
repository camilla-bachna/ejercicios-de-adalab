"use strict";

const containerElement = document.querySelector(".js-container");
const selectElement = document.querySelector(".js-select");
const buttonElement = document.querySelector(".js-update");
const faceElement = document.querySelector(".js-face");

//console.log(containerElement, selectElement, buttonElement);

function updateHandler() {
    //update face
  const selectValue = selectElement.value;
  faceElement.innerHTML = selectValue;
  //console.log(faceElement);

  //update background-color
  const randomNumber = Math.random()*100;
  const roundNumber = Math.ceil(randomNumber);
  const remainderNumber = roundNumber % 2;
  if (remainderNumber === 0){
    containerElement.classList.add('background-color-alt');
  } else {
    containerElement.classList.remove('background-color-alt');
  }
}

buttonElement.addEventListener("click", updateHandler);



/* const randomNumber = Math.random() *100; generates a random number between 1 and 100 
console.log(randomNumber);
const roundNumber = Math.round(randomNumber);
console.log(roundNumber);
const roundNumber2 = Math.floor(randomNumber);
console.log(roundNumber2);
const roundNumber3 = Math.ceil(randomNumber);
console.log(roundNumber3); */