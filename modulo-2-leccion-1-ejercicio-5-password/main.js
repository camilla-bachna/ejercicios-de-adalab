
'use strict';

const titleElement = document.querySelector (".title1");
let passwordElement = document.querySelector(".password1");

titleElement.innerHTML = "Mi contraseña es: ***";

const titleElement2 = document.querySelector (".title2");
let passwordElement2 = document.querySelector(".password2");


passwordElement2.innerHTML = "***";

titleElement2.innerHTML = titleElement2.innerHTML + passwordElement2.innerHTML;
