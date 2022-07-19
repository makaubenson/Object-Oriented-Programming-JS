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
