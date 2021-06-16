const form = document.querySelector('.form');
const button = document.querySelector('.button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
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

//to specify that this is an input element => as HTMLInputElement
//to specify that num1 is a number => : number