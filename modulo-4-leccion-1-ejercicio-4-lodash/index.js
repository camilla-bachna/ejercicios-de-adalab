var _ = require('lodash');

const array1 = [1, 2, 3];
const array2 = _.concat(array1, [2, 3, 4]);

console.log(array1);
console.log(array2);

const array3 = _.union([1, 2, 3], [2, 3, 4]);
console.log(array3);
