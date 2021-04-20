"use strict";

const array = []; // create variable (before) outside of bucle to use inside

const get100Numbers = () => {
  // create function
  
  for (let number = 1; number <= 100; number++) {
    //start bucle to repeat code
    const newArray = array.push(number);
  } //end of bucle let number
  console.log(array); //print in console outside of bucle afterwards
};

get100Numbers(); //execute function

function getReversed100Numbers() {
  console.log(array.reverse());
};

getReversed100Numbers();
