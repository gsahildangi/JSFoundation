function Person ( name, age) {
   //let myName = name ; // Now initialy we are only using the parameter value now we want to save it in a variable.
    // Now this above one is also a valid way however in construtor functon we use it like this.name = name.
    //** Also when we intialize a new varible then we also have to return it as it act as a funtion in that case. 
    this.name = name;   // when using this.name then it act as a constructor function. 
    this.age = age; 
}

function Car (make , model) {
    this.make = make;
    this.model = model;
}

let myFirstCar = new Car("Skoda" , "Octavia");
let myNewCar = new Car ("BMW" ,"M3" )

// console.log(myFirstCar);
// console.log(myNewCar);
// console.log(typeof myFirstCar);
// console.log(typeof myNewCar);

function Tea (type) {
    this.type = type;
    this.describe =  function () {
        return `This is a ${type} tea.`;
    }
}
let myTea = new Tea("lemon")
// console.log(myTea.describe());

//                            cosntructor function VS Prototype

function Animal (species , makeSound) {
    this.species = species;
    // this.makeSound = makeSound;
    
}

Animal.prototype.sound = function (makeSound){
     return `${this.species} make ${makeSound} sound`        
}  

let dog = new Animal("Dog" ,"Barking");
// console.log(dog);
// console.log(dog.sound("roar"));// this will work when we pass the sound in sound function 


function Drink (name){
     if(!new.target){
         throw new Error("Drink should be called using new keyword");
     }
    this.name = name;
    console.log(`This is ${this.name}`);
    
}

let tea = new Drink("Coffee");

