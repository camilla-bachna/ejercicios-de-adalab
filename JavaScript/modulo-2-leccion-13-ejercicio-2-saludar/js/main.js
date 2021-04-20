'use strict';

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const greeting = (student) => 'Bienvenida ' + student;
const greetingStudents = names.map(greeting);

console.log(greetingStudents);
