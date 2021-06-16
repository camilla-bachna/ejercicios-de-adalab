function add (n1: number, n2: number, showResult: boolean, phrase: string){
    return n1 + n2;
}

const number1 = 5; //5.0
const number2 = 2.8; 
const printResult = true; 
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
console.log(resultPhrase + result);