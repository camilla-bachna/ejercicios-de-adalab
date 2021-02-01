"use strict";

const divElement = document.querySelector(".js-container");
const listElement = document.querySelector(".js-list");

const tasks = [
  //array because []
  { name: "Recoger setas en el campo", completed: true }, //object because{}
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

//show how many tasks are there:

//divElement.innerHTML = `There are ${tasks.length} tasks`;
divElement.innerHTML = "There are " + tasks.length + " tasks";

//show only one task

/*let html = "";

for (const oneTask of tasks) {
   html += `<li ${oneTask.completed ? 'class= "strikethrough"' : ''}>${oneTask.name}</li>`; or 

  if (oneTask.completed){
  html += '<li class= "strikethrough">';}
  else{html += '<li>'}
  html += ${oneTask.name}
  html+= '</li>';
}

listElement.innerHTML = html;*/


//Check

let html = "";

for (const oneTask of tasks) {
  /* html += `<li ${oneTask.completed ? 'class= "strikethrough"' : ''}>${oneTask.name}</li>`; or */

  if (oneTask.completed){
  html += '<li class= "strikethrough">';}
  else{html += '<li>'}
  html+= '</li>';
}

html += `<input type="checked" ${oneTask.completed ? 'checked= "checked"': ''}`;
  html += '<li>'
  html += oneTask.name;
  html+= '</li>';

listElement.innerHTML = html;