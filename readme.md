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
