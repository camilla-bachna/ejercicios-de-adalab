var person 
/*: {
    name: string;
    age: number;
}   */
= {
    name: 'Camilla',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] //Tuple: exactly 2 elements, first numeric identifier, second: string identifier => (property) role: (string | number)[] //=> string or number array
};
console.log(person.name);
//: object is the same as empty {}
//mixed array (string and number): any[]
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
