'use strict';

const marks = [5, 4, 6, 7, 9];

const addpoint = (number) => number + 1; // arrow function
const inflatedMarks = marks.map(addpoint); //method map unses the function to add 1 number to all marks

console.log(inflatedMarks);
