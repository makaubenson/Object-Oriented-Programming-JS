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
