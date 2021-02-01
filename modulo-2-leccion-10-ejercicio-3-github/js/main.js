"use strict";

function searchUser() {
  fetch("https://api.github.com/users/{username}")
    .then((response) => response.json())
    .then((data) => {
      const inputElement = document.querySelector(".js-input");
      const inputValue = inputElement.value;
      inputValue.src = data.message;
      console.log(inputValue);
    });
}
const btn = document.querySelector(".js-button");
btn.addEventListener("click", searchUser);
