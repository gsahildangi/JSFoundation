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
