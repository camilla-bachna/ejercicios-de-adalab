"use strict";

function bestLostNumber() {
  const lostNumbers = [4, 8, 15, 16, 23, 42];

  //filter even numbers

  const lostNumbersEven = lostNumbers.filter(
    (lostNumbers) => lostNumbers % 2 === 0
  );
  console.log(lostNumbersEven);

  //filter only odd numbers

  const lostNumbersOdd = lostNumbers.filter(
    (lostNumbers) => lostNumbers % 2 !== 0
  );
  console.log(lostNumbersOdd);

  //make new array and add one list to another

  const newList = lostNumbersEven.concat(lostNumbersOdd);
  console.log(newList);

  //filter multiples of 3

  const multiplesOf3 = lostNumbers.filter(
    (lostNumbers) => lostNumbers % 3 === 0
  );
  console.log(multiplesOf3);

  //make new array with even list and multiples of 3
  const secondList = lostNumbersEven.concat(multiplesOf3);
  console.log(secondList);
}

bestLostNumber();
