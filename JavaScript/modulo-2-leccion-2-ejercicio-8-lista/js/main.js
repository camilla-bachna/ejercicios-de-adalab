'use strict';

const element = document.querySelector(".wrapper");

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

element.innerHTML = `<ul>
<li>${firstDogName} 
<span>looks like</span> 
<img src=${firstDogImage}></li>
<li>${secondDogName} 
<span>looks like</span> 
<img src=${secondDogImage}></li>
<li>${thirdDogName} 
<span>looks like</span> 
<img src=${thirdDogImage}></li>
</ul>`;
