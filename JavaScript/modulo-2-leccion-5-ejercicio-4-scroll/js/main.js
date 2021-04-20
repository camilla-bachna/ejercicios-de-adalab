"use strict";


window.onscroll = function() {myFunction()};


function myFunction(){
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const changeColor = document.querySelector('.js-event');
  if (scrollTop < 249) {
  	changeColor.classList.add("scrolled1");
  } else {
  	changeColor.classList.add("scrolled2");
  }
}

