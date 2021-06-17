const person
/*: {
    name: string;
    age: number;
}   */
= {
    name: 'Camilla',
    age: 30,
    hobbies: ['Sports', 'Cooking'], //string[]
    role: [2, 'author'] //Tuple: exactly 2 elements, first numeric identifier, second: string identifier => (property) role: (string | number)[] //=> string or number array
};

console.log(person.name);

//: object is the same as empty {}
//mixed array (string and number): any[]

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}