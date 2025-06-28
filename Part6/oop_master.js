//This is example of Object.
let car = {
    make: "Skoda",
    model: "Superb",
    year: 2020,

    start: function () {
        return `${this.model} start `;
    }

}
//we don't even need to make a object for this one just use the objectName.functionName()
// console.log(car.start());

//However we have not make many objects or you can say many copies of this object.
//Lets try to make a constructor Fucntion and make many copies just as objets as wwe know we can make instance 
//with help of classes and object and also with help of constructor function.

// To write a functional Constructor it not compulsasary but we as a practice make its first letter as capital.

function Person(name, age) {
    this.name = name;
    this.age = age;
    //  console.log(`${this.name} is a user with age = ${this.age}`);

}

let user1 = new Person("sahil", 28); // here to use a fucntional constructor we have to use new keyword .
// console.log(user1.name);
let user2 = new Person("Rahul", 44);


// Now lets talk about prototype chaining.

function Animal(type) {
    this.type = type;
}
//Now to add a prototype to this above functional constructor we can also inject the prototype with prototype method.

Animal.prototype.speak = function () {
    return `${this.type} makes a sound. `
}

//Now lets manipulate some built in object of js

Array.prototype.sahilFunction = function () {
    return `Custom fucntion for Array showing data : ${this}`
}

let arr1 = [1, 2, 3];
// console.log(arr1.sahilFunction());

let arr2 = [1, 2, 3, 4, 5, 6]
// console.log(arr2.sahilFunction()); //so that this above will show the data of the oject with which it is called.


//Now lets try making a class.

class Vehicle {
    constructor(make, model) {
        this.make = make,
            this.model = model
    }
    start() {
        return `${this.make} makes this ${this.model}`
    }
}
//Now lets make a another class and try to inhert it so that we can us its properties and methods.

class car1 extends Vehicle {
    drive() {
        return `${this.model} from ${this.make} drives so good with this function`
    }
}

let myFirstCar = new car1("Volkswagen", "Virtus")
// console.log(myFirstCar);
// console.log(myFirstCar.drive());//this method is car1's method
// console.log(myFirstCar.start());//this is the inherited method of car1 that it inherit from Vehicle.    


//                           "Encapsulation"
// Encapsulation is a fundamental concept in object - oriented programming(OOP) that refers to the bundling
//  of data(variables) and methods(functions) that operate on that data into a single unit, typically a 
//  class. It also involves restricting direct access to some of an object's components, which is a way 
//  of enforcing data hiding.
// Data is accessed or modified—usually through well-defined interfaces like getters and setters.
// In encaspsulation we restrict the direct access of object data.

//To do this in features/variable we use "#" in front of that variable.

class BankBalance {
    #ifscCOde = 'IPDPS7214' //now this feature or variable can not be directly used to use this we have
    //to make a custom method.
    #balance = 0;

    deposit(amount) {
        this.#balance = this.#balance + amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`
    }
}

let myBalance = new BankBalance();
// console.log(myBalance.getBalance());//as we have not set any amount now first lets deposite some amount in it
myBalance.deposit(1000000003333);
// console.log(myBalance.getBalance());

//                                 Abstraction
// Abstraction in object-oriented programming is all about showing only the relevant details to the user
// while hiding the complex inner workings behind the scenes. It's like driving a car: you know how to 
// steer, brake, and accelerate—but you don’t need to understand how the engine works to get from point A to B.

// In programming terms, abstraction lets you define what an object does without necessarily describing how
//  it does it. This is typically achieved through abstract classes and interfaces.


// Here’s a simple way to put it:
// - Encapsulation hides the data.
// - Abstraction hides the complexity.

class CoffeMachine {
    start( ){
        //call db      - so this is not visible to client as what is happening .
        //filter value
     return `Starting the machine.` // end user will only get this message.
    }
    BrewCoffee(){
        //complex calculations
    return `Brewing coffee`
    }
    pressStartButton(){
      let msg1 =  this.start();
       let msg2 = this.BrewCoffee();
    return `${msg1} ....Loading......${msg2}`;
    }

}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.BrewCoffee());
// console.log(myMachine.pressStartButton());

//                                              POLYMORPHISM
//Something that can take multiple forms.

class Bird {
    
    fly(){
     return `Birds are flying....`
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguin can't fly`
    }
}

let bird = new Bird();
// console.log(bird.fly());
let penOne = new Penguin();
// console.log(penOne.fly());


//                        Static Method.
// By making static method we want to ensure that we only call the fucntion with class name and where we
//don't want user to make instance of that class.
/*
In JavaScript, a static method is a function that belongs to the class itself, rather than to any 
specific instance of that class. Static methods are called directly on the class name and do not require
 creating an object (instance) of the class.
Key characteristics of static methods:
Called on the Class: They are invoked using the class name, not an object instance.
No this context (for instance properties): Inside a static method, this refers to the class constructor 
itself, not an instance of the class. Therefore, you cannot directly access instance properties or 
methods using this within a static method.
Utility functions: They are commonly used for utility functions, helper methods, or factory methods t
hat perform operations related to the class as a whole, rather than specific object data.
*/ 
class Calculator{
   static add (a ,b){
     return (a+b)
   }
}

let cal1 = new Calculator()
// console.log(cal1.add(5,4));// This will give error as Add is not a function. 
//To call this we have to call it with the class name.
//This will work in static method case
// console.log(Calculator.add(2,5));

//                                           Getter and setter in js

