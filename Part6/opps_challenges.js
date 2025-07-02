/*
Prototypes in JavaScript
Task: Prototype Chaining

Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

Then create another constructor Dog that inherits from Animal using prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype 
chain between Dog and Animal.


Solution:-
===-------------------------===
// Step 1: Animal constructor function
function Animal() {
  // No methods here—only setup or properties if needed
}

// Add speak() to Animal's prototype
Animal.prototype.speak = function() {
  return 'Animal speaking';
};

// Step 2: Dog constructor function
function Dog() {
  // Call Animal constructor to initialize any shared properties
  Animal.call(this);
}

// Step 3: Set up prototype inheritance
Dog.prototype = Object.create(Animal.prototype);

// Step 4: Restore Dog’s constructor reference
Dog.prototype.constructor = Dog;

// Step 5: Add bark() method to Dog's prototype
Dog.prototype.bark = function() {
  return 'Woof!';
};

const myDog = new Dog();

console.log(myDog.speak());        // "Animal speaking" — from Animal.prototype
console.log(myDog.bark());         // "Woof!" — from Dog.prototype
console.log(myDog instanceof Dog);    // true
console.log(myDog instanceof Animal); // true

// Prototype chain check:
console.log(
  Object.getPrototypeOf(Dog.prototype) === Animal.prototype
); // true

// ****
// Object.create(proto) -	Creates a new object with its internal prototype set to proto
// Dog.prototype = ...	Sets up inheritance so that Dog instances delegate to Animal.prototype
// .constructor -	Resets the constructor property on Dog.prototype to refer to Dog
// Prototype Methods - 	Efficiently shared across instances; memory-friendly and consistent

*/
/*
2.
Functional Constructor and Errors

Task 1: Create a Functional Constructor
Create a functional constructor Person that takes name and age as parameters. Add a method 
greet() to the constructor that returns "Hello, my name is [name]".

Task 2: Handle Errors
Modify the Person constructor to throw an error if the age is not a positive number.

=-----------------------------=
//Solution:
function Person(name, age) {
  // Step 1: Validate the age
  if (typeof age !== 'number' || age <= 0) {
    throw new Error('Age must be a positive number');
  }

  // Step 2: Assign properties
  this.name = name;
  this.age = age;

  // Step 3: Define an instance method
  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}
*/ 


/*
--------------------------------------------------------------------------------------------------------------
3.
Classes, Objects, and Inheritance
Task 1: Class Inheritance

Create a class Vehicle with properties make and model, and a method getDetails() that returns a 
string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method 
startEngine() that returns "Engine started".

Task 2: Method Overriding in Inheritance

Extend the Vehicle class from the previous task to include a method move() that returns 
"The vehicle is moving". Then, override the move() method in the Car class to return "The car
 is driving".

Task 3: Static Methods in Classes

Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is
 an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass 
 of Vehicle, and false otherwise.

 Solution:-
=-----------------------------------------------=
 class Vehicle {
  constructor(make, model) {
    this.make  = make;
    this.model = model;
  }

  // Consistent name
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }

  move() {
    return "The vehicle is moving";
  }

  // Static so you call Vehicle.isVehicle(...)
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  // Optional: only define a constructor if you need to do extra work
  constructor(make, model) {
    super(make, model);
  }

  // Overrides Vehicle.move()
  move() {
    return "The car is driving";
  }

  startEngine() {
    return "Engine started";
  }
}

// Usage examples
console.log(Vehicle.isVehicle({}));          // false
console.log(Vehicle.isVehicle(new Car()));   // true

const v = new Vehicle("Toyota", "Corolla");
console.log(v.getDetails());  // "Make: Toyota, Model: Corolla"
console.log(v.move());        // "The vehicle is moving"

const c = new Car("Honda", "Civic");
console.log(c.getDetails());  // inherited method
console.log(c.move());        // "The car is driving"
console.log(c.startEngine()); // "Engine started"

 */ 


/*
4.  
Encapsulation, Polymorphism, Abstraction, and Getters/Setters

Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and 
withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the
balance never goes negative.

Task 2: Polymorphism with Method Overriding

Create a class Shape with a method area() that returns 0. Create two subclasses Circle and 
Rectangle that override the area() method to calculate the area of a circle and a rectangle, 
respectively.

---------------------------------------------------==
//Solution:
class BankAccount {
  #balance; // private property

  constructor(initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative.");
    }
    this.#balance = initialBalance;
  }

  // Getter: read-only access to private balance
  get balance() {
    return this.#balance;
  }

  // Setter: controlled update (e.g. for direct balance setting - optional)
  set balance(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error("Balance must be a non-negative number.");
    }
    this.#balance = value;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit must be positive.");
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("Withdraw must be positive.");
    if (amount > this.#balance) throw new Error("Insufficient funds.");
    this.#balance -= amount;
  }
}



const acc = new BankAccount(1000);
acc.deposit(500);                      // balance: 1500
acc.withdraw(200);                    // balance: 1300

console.log(acc.balance);            // ✅ Getter: 1300

acc.balance = 2000;                  // ✅ Setter (controlled)
console.log(acc.balance);            // 2000

acc.balance = -50;                   // ❌ Throws: must be non-negative

// 🧠 Key Concepts Recap

// #balance	Truly private, inaccessible outside
// get balance()	Provides controlled read access
// set balance()	Validates and controls update
// deposit() / withdraw()	Business logic methods that encapsulate rules

// 🧩 Task 2: Polymorphism with Method Overriding
// 🤔 What Is Polymorphism?
// Polymorphism means “many forms.” In OOP, it allows a single interface (like area()) to behave differently for different objects.


// javascript
class Shape {
  area() {
    return 0; // Default behavior (can be abstracted out in stricter languages)
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}


const shapes = [
  new Shape(),
  new Circle(5),            // Area ≈ 78.54
  new Rectangle(4, 6)       // Area = 24
];

shapes.forEach((shape) => {
  console.log(shape.constructor.name + ': ' + shape.area());
});
*/ 