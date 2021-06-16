var form = document.querySelector('.form');
var button = document.querySelector('.button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
  return num1 + num2;
}
function handleInputs() {
  console.log(add(+input1.value, +input2.value));
}
button.addEventListener('click', handleInputs);
function handleDefault(ev) {
  ev.preventDefault();
}
form.addEventListener('submit', handleDefault);
//was created after writing tsc sum.ts
