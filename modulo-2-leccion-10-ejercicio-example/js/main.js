"use strict";

fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.body.innerHTML = data.result;
  });


/*   fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
  .then(response => response.json())
  .then(data => document.body.innerHTML = data.result); */