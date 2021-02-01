"use strict";

const inputElement = document.querySelector(".js-input");
const loginElement = document.querySelector(".js-login");
const inputPhoto = document.querySelector(".js-photo");
const repositoriesElement = document.querySelector(".js-repositories");
const buttonElement = document.querySelector(".js-button");

function searchUser() {
  const username = inputElement.value;
  console.log(username);
  fetch(`https://api.github.com/users/${username}`)
    // "https://api.github.com/users/" + username
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-login").innerHTML = data.login;
      inputPhoto.src = data.avatar_url;
      inputPhoto.alt = username;
      repositoriesElement.innerHTML = data.public_repos;
    });
} // check keys of JSON https://api.github.com/users/gootyfer

buttonElement.addEventListener("click", searchUser);
