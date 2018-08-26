console.log('Hello world!');
// Declare a variable and assign it a value
let greeting = 'Hello world';
console.log(greeting);
let firstName = 'Rick'; // single
let lastName = "Hubbard"; // double 
console.log(firstName);
console.log(lastName)
/* This doesn't work:
let message = 'You can't be serious!';
console.log(message); */
// This DOES work:
let message =  'You can\'t be serious!';
console.log(message);
let message2 = "he asked, \"Where are we?\"";
console.log(message2)
let message3 = 'He asked, "Where are we?"';
console.log(message3)
// numbers
let pi = 3.14; //floating point numbers are still considered numbers in JS
let age = 28; //just like in good old Python!!

console.log(pi);
console.log(age);
console.log(1 + 1); //2

//booleans **don't use quotes for booleans**
let isDrinkingAge = true;
let isSeniorCitizen = false;

// Arrays; similar to lists

console.log(isDrinkingAge)
console.log(isSeniorCitizen)
let favoriteFruits = ['mango', 'raspberry', 'blueberry'];
console.log(favoriteFruits);

//Print the first element
console.log(favoriteFruits[0]);
console.log(favoriteFruits[1]);
console.log(favoriteFruits[2]);

//Objects
//let userObject = { name: 'Rick', age: 26, favoriteFruits: ['mango', 'raspberry', 'blueberry',] };
// Or make it look prettier
let userObject = {
    name: 'Rick',
    age: 26,
    favoriteFruits: ['mango', 'raspberry', 'blueberry'],
    car: {
        make: 'Chevy',
        model: 'Malibu',
        isFunctional: true
    }
};
//Dot notation:

console.log(userObject.name); // Rick
console.log(userObject.age); // 26
console.log(userObject.favoriteFruits); // ['mango'. 'raspberry', 'blueberry' ]
console.log(userObject.favoriteFruits[0]); // mango

console.log(userObject.car.make);
console.log(userObject.car.model);
console.log(userObject.car.isFunctional);

//Conditionals

if (userObject.age >= 21) {
    console.log('This user can drink!');
}   else {
        console.log('THis user cannot drink!')
}
