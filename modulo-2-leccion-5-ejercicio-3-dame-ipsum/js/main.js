"use strict";

//element HTML

const loremIpsum = document.querySelector('.js-paragraph');

//handler

function paragraph(){
  loremIpsum.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi omnis adipisci voluptate blanditiis atque assumenda nihil optio rem aspernatur, esse cum vero modi molestias quo vel perferendis molestiae architecto veniam!";
}

// listener on the element, with event type and handler
p.addEventListener('mouseover', paragraph);