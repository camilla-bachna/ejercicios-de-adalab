'use strict';

let year = 8;
let countFourYears = 0;

for (let i = 0; i < 100; i++) {
  countFourYears += 0 + 4;
  if (year === countFourYears - 1) {
    console.log('The next leap year is in 1 year');
  } else if (year === countFourYears - 2) {
    console.log('The next leap year is in 2 years');
  } else if (year === countFourYears - 3) {
    console.log('The next leap year is in 3 years');
  } else if (year === countFourYears) {
    console.log('This is a leap year');
  }
}
