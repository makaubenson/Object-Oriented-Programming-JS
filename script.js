'use strict';

//Constructor Functions

//function expression
const Person = function (firstName, birthYear) {
  //   console.log(this); //Person {}

  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // This could work, but it is bad practice, you should never create method inside constructor functions.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
const benson = new Person('Benson', 2000);
console.log(benson); //Person {firstName: 'benson', birthYear: 2000}

//What happens when we call a function with the new operator
//1. New empty object is created
//2. The function is called, then the this keyword is set to the new empty object.
//3. The Newly created object is linked to prototype
//4. Function auto returns the object created from the beginning.
const makau = new Person('Makau', 2002);

const ruth = new Person('Ruth', 2002);
console.log(ruth, makau);
//`Person {firstName: 'Ruth', birthYear: 2002} Person {firstName: 'Makau', birthYear: 2002}`;

console.log(benson instanceof Person); //true

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
benson.calcAge(); //37
ruth.calcAge(); //35

//Prototype for benson
console.log(benson.__proto__); //{calcAge: ƒ, constructor: ƒ}
console.log(benson.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(benson)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//setting properties in the Person.prototype
Person.prototype.species = 'Homo Sapiens';
console.log(benson);
console.log(ruth);
console.log(makau);

console.log(benson.species); //Homo Sapiens
console.log(ruth.species); //Homo Sapiens

console.log(benson.hasOwnProperty('firstName')); //true
console.log(benson.hasOwnProperty('species')); //false

console.log(benson.__proto__);
console.log(benson.__proto__.__proto__);
console.log(benson.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

//Prototype of Arrays
const arr = [3, 6, 4, 6, 9, 5, 6, 9, 3];
console.log(arr.__proto__); // Returns all functions that exists in Array.prototype
console.log(arr.__proto__ === Array.prototype); //true

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); //[3, 6, 4, 9, 5]

const h1 = document.querySelector('h1');
console.dir(h1);
