'use strict';
/*
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

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. 
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

//constructor function
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

//create functions
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.break = function () {
  this.speed -= 15;
  console.log(`${this.make} is going at ${this.speed}`);
};

//create car objects
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 93);

bmw.accelerate();
bmw.break();
bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.break();
bmw.break();
bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();


//ES6 CLASSES
//class expression
// const PersonCL = class {};

//Class Declaration
class PersonCl {
  //add constructor method- works as constructor function.
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Properties and Methods writted outside constructor will be in prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
//create object (Instance)
const jessica = new PersonCl('Jesicca Brown', 1998);
console.log(jessica);
jessica.calcAge(); //39
console.log(jessica.__proto__ === PersonCl.prototype); //true

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet(); //Hey Jesicca Brown


const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  //getter - To make a method a getter, you prepend the keyword get before the method
  get latest() {
    return this.movements.slice(-1).pop();
  },
  //setter- to make a method a setter, prepend the keyword set before the method
  set latest(mov) {
    //setter must always have at least one method parameter
    this.movements.push(mov);
  },
};

//to access the getter, we call it like a property not method
console.log(account.latest); //300

account.latest = 50;
console.log(account.movements);

//Getters and Setters in Classes
class PersonCl {
  //add constructor method- works as constructor function.
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Properties and Methods writted outside constructor will be in prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  //getter in a class
  get age() {
    return 2037 - this.birthYear;
  }
  //setting a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}

const bensonCl = new PersonCl('Benson Makau', 2000);
console.log(bensonCl.age); //37

const walter = new PersonCl('Walter Kivyolo', 1995);


//static methods
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
const ruth = new Person('Ruth', 2002);

const makau = new Person('Makau', 2000);
console.log(ruth, makau);

//creating a static method
Person.hey = function () {
  console.log('Hey There.....!!!');
};

//calling the function
Person.hey();

//Objects Cant Access The Method Above
// makau.hey();
//Uncaught TypeError: makau.hey is not a function
//This is because, the function is not defined in the constructor functions prototype.

class PersonCl {
  //add constructor method- works as constructor function.
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //INSTANCE METHODS
  //Properties and Methods writted outside constructor will be in prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  //getter in a class
  get age() {
    return 2037 - this.birthYear;
  }
  //setting a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  //creating static method
  static hey() {
    console.log('Hey There.....!CLASSS!');
  }
}

const bensonCl = new PersonCl('Benson Makau', 2000);
console.log(bensonCl.age); //37

PersonCl.hey();


//Object.create
const personProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
//This object will be the prototype of all the Person objects

const steven = Object.create(personProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2001;
steven.calcAge(); //36
console.log(steven.__proto__ === personProto); //true

const sarah = Object.create(personProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀

//constructor function
class CarCl {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }

  //create functions
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  break() {
    this.speed -= 15;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.break();
ford.speedUS = 50;
console.log(ford);


//Inheritance Between Classes : Constructor Functions
const Person = function (firstName, birthYear) {
  //   console.log(this); //Person {}

  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//Child Class - Pass all the args in parent class plus its own additional ones.
const Student = function (firstName, birthYear, course) {
  //method 1: VIOLATES DRY PRINCIPLE
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  //METHOD 2
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking Prototypes
Student.prototype = Object.create(Person.prototype);
// Student.prototype is now an object that inherits from Person.prototype

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD


//constructor function
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

//create functions
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed); //inheriting parent class
  this.charge = charge;
};
//Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};
//Create EV Object
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
// console.log(tesla);

// tesla.break();
// tesla.accelerate();

//Inheritance Between Classes: ES6 CLASSES
//Static Method
class PersonCl {
  //add constructor method- works as constructor function.
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Properties and Methods writted outside constructor will be in prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  //getter in a class
  get age() {
    return 2037 - this.birthYear;
  }
  //setting a property that already exists
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  //static method
  static hey() {
    console.log('Hey There!!');
  }
}

//linking prototypes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear); //Constructor of the Parent Class
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  //Overriding The Original calcAge() function
  calcAge() {
    console.log(
      `I am ${2037 - this.birthYear} years old, but as a student i feel like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha James', 2012, 'Computer Science');
// console.log(martha);
// martha.introduce();
// martha.calcAge();

//INHERITANCE BETWEEN CLASSES: OBJECT.CREATE
//Object.create
const personProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
//This object will be the prototype of all the Person objects

const steven = Object.create(personProto);

//linking prototypes
const studentProto = Object.create(personProto);

studentProto.init = function (firstName, birthYear, course) {
  personProto.init.call(this, firstName, birthYear);
  this.course = course;
};

studentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};
const jay = Object.create(studentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for choosing to Bank with Us,${owner} `);
  }

  //PUBLIC INTERFACE
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan amount of ${val} has been approved. `);
    }
  }
}

const acc1 = new Account('Benson', 'KSH', 1111);

//WAY 1
// acc1.movements.push(250);
// acc1.movements.push(-140);

//WAY 2
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
