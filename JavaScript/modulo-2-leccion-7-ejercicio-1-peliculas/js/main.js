"use strict";

const arr = ['Starwars', 'Indiana Jones', 'Breakfast at Tiffanys'];

arr[3] = 'Love Actually';

console.log(arr);

arr[1] = 'The Godfather';

console.log(arr);

arr[0] ='Vertigo';

console.log(arr);

function workWithMovies(){
    const arr = ['Starwars', 'Indiana Jones', 'Breakfast at Tiffanys'];
    arr[3] = 'Love Actually';
    arr[1] = 'The Godfather';
    arr[0] ='Vertigo';
    return arr;
}

console.log(workWithMovies());