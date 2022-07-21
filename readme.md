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

- Each function in js has a property called prototype.

```
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
benson.calcAge(); //37

//Prototype for benson
console.log(benson.__proto__); //{calcAge: ƒ, constructor: ƒ}
console.log(benson.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(benson)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
```

- Person.prototype is the prototype of benson, ruth or even makau BUT `Person.prototype is not the prototype of Person`

![inheritance](https://user-images.githubusercontent.com/59168713/180155939-54a20059-7624-4484-ad00-e90ff83a2130.png)

![prototypal inheritance](https://user-images.githubusercontent.com/59168713/180155894-6b520e5f-7001-4b68-a4c2-43526a525408.png)
