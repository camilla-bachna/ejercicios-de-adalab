"use strict";

/* function get100Numbers() {
  let acc = 0;
  const array = [];
  for (let i = 0; i < 100; i++) {
    acc++;
    const newArray = array.push(acc);
  }
  console.log(array);
}
get100Numbers(); */

function get100Numbers() {                                           // create function
  const array = [];                                                 // create variable (before) outside of bucle to use inside
for (let number = 1; number <= 100; number++){                      //start bucle to repeat code
  const newArray = array.push(number);
}; //end of bucle let number
  console.log(array);                                              //print in console outside of bucle afterwards 
  };
  
  get100Numbers(); 
