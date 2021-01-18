
'use strict';

const titleElement = document.querySelector(".title");
let listElement = document.querySelector(".list__item--2");
listElement = document.querySelector(".list__item--1");

titleElement.innerHTML = titleElement.innerHTML + " " + listElement.innerHTML;