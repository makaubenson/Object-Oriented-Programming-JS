# Object Oriented Programming -JS

- OOP is a programming paradigm that is based on concept of objects.
- We use objects to model real world abstract features.
- Objects can have properties and methods.
- Objects are building blocks of applications, and interact with one another.
- These interactions happen through a public interface(API)
- OOP was build with goal of organizing code.

## Classes

- Blueprint from which we can create new objects.

## Instance

- Object created through class.
- Real object created from class.

## Fundamental Principles Guiding model real world data into classes

- There are 4 fundamental principles guiding these:
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

### Abstraction

- Ignore or hide details that don't matter.

### Encapsulation

- Keeping properties and methods private inside a class so that they are not accessible outside the class.
- Some methods can however be exposed as a public interface (API)

### Inheritance

- Making all properties and methods of a certain class available to a child class, forming hierachical relationship between classes.

- Goal is to reuse logic that is common to both classes.
- The child class, can have its own methods and properties apart from those inherited.
- ![inheritance_image]

### Polymorphism

- A child class can overwrite a method it inherited from a parent class.

## OOP in JS

- Process of creating an instance is instantiation.

### Prototypes.

- All objects in js are linked with a prototype object.
- The `prototype object` contains methods and properties that all the objects that are linked to that prototype can access and use. This method is known as `prototypal inhertance`
- Here is instance inheriting from a class.
- Objects delegate behavior to the linked prototype object. This mechanism is called `delegation`.

### How do we implement OOP in Js ?

#### Constructor Function

- Technique of creating objects from a function.
- This is how built-in objects like `Arrays, Maps or Sets` are implemented.

#### ES6 Classes

- Modern way of doing OOP in js.
- They are just a layer of abstraction from constructor functions.
- They work exactly like constructor functions.
- They do not behave like classes in classical OOP.

#### Object.create()

- Easiest and most straighforward way of linking an object to a prototype object.

##### Constructor Functions

- Difference between regular and constructor function is, constructor function is `called` with the `new operator`.
- Constructor functions should always start with caps.
- Arrow functions wont work as a constructor function since it lacks its `this` keyword.
- Only function declarations and function expressions will work as constructor functions.

#### What happens when we call a function with the new operator

1. New empty object is created
2. The function is called, then the this keyword is set to the new empty object.
3. The Newly created object is linked to prototype
4. Function auto returns the object created from the beginning.

```
//function expression
const Person = function (firstName, birthYear) {
  //   console.log(this); //Person {}
  this.firstName = firstName;
  this.birthYear = birthYear;
   // This could work, but it is bad practice, you should never create method inside constructor functions.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
const benson = new Person('Benson', 2000);
console.log(benson); //Person {firstName: 'benson', birthYear: 2000}

const makau = new Person('Makau', 2002);

const ruth = new Person('Ruth', 2002);

console.log(ruth, makau);
// Output of creating the Objects.
`Person {firstName: 'Ruth', birthYear: 2002} Person {firstName: 'Makau', birthYear: 2002}`;
```

- `benson, makau and ruth ` are all instances of `Person`.
- `console.log(benson instanceof Person);`// True
- `console.log(ruth instanceof Person);`// True
- `console.log(makau instanceof Person);`// True

### Prototypes

- Each function in js has a property called `prototype`. That includes the constructor functions.
- Every object created by a certain constructor function, will get access to `methods and properties` that we define on the `constructor's prototype property`.

## adding method to prototype property.

```
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
benson.calcAge(); //37
ruth.calcAge(); //37

//Prototype for benson
console.log(benson.__proto__); //{calcAge: ƒ, constructor: ƒ} - This the prototype of benson.

console.log(benson.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(benson)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
```

- The prototype of the benson object is the prototype property of the constructor function.
- `Person.prototype` is not the prototype of `Person` but what is going to be used as prototype by all objects created with the Person constructor function.
- This similar to saying `Person.prototype` is the prototype of `benson` object.

- Person.prototype is the prototype of benson, ruth or even makau BUT `Person.prototype is not the prototype of Person`

![inheritance](https://user-images.githubusercontent.com/59168713/180155939-54a20059-7624-4484-ad00-e90ff83a2130.png)

![prototypal inheritance](https://user-images.githubusercontent.com/59168713/180155894-6b520e5f-7001-4b68-a4c2-43526a525408.png)

- Due to prototypal inheritance, we can access methods an properties defined in the prototype property of the constructor functions.

```
benson.calcAge(); //37
ruth.calcAge(); //35
```

#### Why does the above code really work?

- This is because each object has access to the methods and properties in its prototype. The prototype of `benson and ruth` is `Person.prototype`.

### Checking if objects properties

```
console.log(benson.hasOwnProperty('firstName')); //true
console.log(benson.hasOwnProperty('species'));//false
```

- The first instance is `true` since `firstName` is a direct property of `benson`
- The second instance is `false` since `species` is not a direct property of `benson` but of the `benson.prototype` or rather the prototype property of `Person` (Person.prototype).

![benson prototype](https://user-images.githubusercontent.com/59168713/180166749-f836e175-af3d-418f-90b4-704ec84c1842.png)

## How Prototypal Inheritance / Delegation Works

- It all starts with the creation of the constructor function, e.g

```
const Person = function(name,birthYear){
  this.name = name;
  this.birthYear = birthYear;
}
```

- This constructor function has Prototype property which is an object. (Person.prototype)
- `Person.prototype` has link back to the constructor function which is the `constructor` property.
- Essentially, `Person.prototype.constructor` will point back to the `Person` constructor function.
- Person.prototype is not the prototype of Person constructor function but of all the objects created using the the `Person` Constructor function.

## How Object is created using the new Operator and the constructor function.

- When we call any function with the `new` operator, a new empty object is created instantly, then `this` keyword is assigned to the newly created object.
- The new object is linked to the constructor functions prototype property(Person.prototype). This happens internally by adding `__proto__` to the new object.
- Therefore, `Person.prototype` is the new object's prototype which is denoted in the `__proto__` property of the object(e.g benson).
- The new object is auto returned from the functions unless it is explicitly defined something else.

## Why does it work this way, and why is this technique so powerful?

`benson.calcAge()` - While trying to call this function, js cant actually find the calcAge function in the `benson object`.

- We can create as many Person objects as we want and they will all access the properties and methods in Person prototypes property.

#### How then does it finally executed the function?

- When js doesnt find a method or property directly in the Object's property, it looks in the prototype.

## More Prototypes Detail

- Since Person.prototype is an object, it also has a prototype, and its prototype is `Object.Prototype`.
- `Object.prototype` is the top in the prototype chain, thus its prototype is `null`.
- Its `__proto__` will point to `null`;

## Prototype Chain In Diagram

![prototype chain](https://user-images.githubusercontent.com/59168713/180174506-ec91494e-c0b2-42f3-bf25-e0ce98c660be.png)

## Prototype Inheritance on Built In Objects

#### Prototype of Arrays

```
const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
```

- Since arrays inherit all the methods from `Array.prototype`, we can extend the functionality of arrays by creating functions in the Arrays prototype.

```
const arr = [3, 6, 4, 5, 6, 9, 3];
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());//[3, 6, 4, 9, 5]
```

- Its not a good idea though to extend arrays functionality as above:-
- (a) - Js may add a new function to their code base with the same name as yours and working differently, thus your code will use the new method.
- (b) - Not appropriate for projects being collaborated.

```
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

```

## ES6 CLASSES

```
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
```

##### Please note:

- Classes are not hoisted. You cant use them before declaring.
- Classes are first class citizens. They can be parsed in functions and returns from functions.
- Classes are executed in strict mode.

### What to use between constructor functions pr ES6 CLASSES

- Its personal preferences (since all work the same despite that classes just hide the real nature of constructor functions.)

## Setters and Getters

- Every objects in js can have setter and getter properties.
- We call these properties `assesor` properties while the normal properties are called `data` properties.
- They are basically functions that set and get values.

```
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
```

## Static Methods

- `Array.from()` converts any array like structure to a real array.
- `from()` is a method attached to the `Array` constructor, we cannot use it on its own on an array.

##### Method 1

```
//creating a static method
Person.hey = function () {
  console.log('Hey There.....!!!');
};

//calling the function
Person.hey();
```

##### Method 2

```
  static hey() {
    console.log('Hey There.....!CLASSS!');
  }
```

## OBJECT.CREATE - METHOD 3 OF IMPLIMENTING PROTOTYPE INHERITANCE

- No prototype properties, constructor function and new operator.

```
const personProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};
//This object will be the prototype of all the Person objects

const steven = Object.create(personProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2001;
steven.calcAge(); //36
```

- This is the least used way to implement prototypal inheritance.
- `console.log(steven.__proto__ === personProto); //true`
- Object.create creates a new object and the prototypeof that object is the object that we parse in.
- `const steven = Object.create(personProto);`
- The prototype of steven object is personProto.

### Inheritance Between Classes : Constructor Functions

```
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
```

### Inheritance Between Classes: ES6 CLASSES

```
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
console.log(martha);
martha.introduce();
martha.calcAge();

```

## INHERITANCE BETWEEN CLASSES: OBJECT.CREATE

```
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
```

![ObjectCreate class inheritance](https://user-images.githubusercontent.com/59168713/180309648-bcd3b19f-b148-436e-b0f3-ac6a228a1144.png)

### ENCAPSULATION: PROTECTED PROPERTIES AND METHODS

- Encapsulation means keeping some properties and methods private inside class that they aint accessible outside the class.

##### Public Fields

- Defining a public fields(always will be on every instance created)
- These fields are also referencable with the this keyword

```
   locale = navigator.language;
```

##### Private Fields

```
 #movements = [];

 //Error
 <!-- Private field '#movements' must be declared in an enclosing class -->
```

- Not accessible outside the class it is defined in

  #### Private Methods

```
 requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan amount of ${val} has been approved. `);
    }
  }

  #approveLoan(val) {
  return true;
  }
```
