const form = document.querySelector('.form');
const button = document.querySelector('.button');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');

function add(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {
    return 'There is a mistake, num1 and num2 are not numbers';
  }
}

function handleInputs() {
  console.log(add(input1.value, input2.value));
}

button.addEventListener('click', handleInputs);

function handleDefault(ev) {
  ev.preventDefault();
}

form.addEventListener('submit', handleDefault);

// unintentionally strings instead of numbers => would get normally unwanted behavior at runtime, e.g. would be 23 if numbers would be 2 and 3. The value of an input element is always a string

// with typeof you can check if num1 and num2 are numbers or instead of error message: return +num1 + +num2 => converting to numbers

//download ts on https://www.typescriptlang.org/
// sudo npm install -g typescript
//compile tsc sum.ts
//=> in console you see:  error: Argument of type 'string' is not assignable to parameter of type 'number'. => add a + before input1.value
