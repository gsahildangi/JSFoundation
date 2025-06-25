//This is example of Object.
let car = {
    make : "Skoda",
    model : "Superb",
    year : 2020 ,

    start :function (){
        return `${this.model} start `;
    }

}
//we don't even need to make a object for this one just use the objectName.functionName()
// console.log(car.start());

//However we have not make many objects or you can say many copies of this object.
//Lets try to make a constructor Fucntion and make many copies just as objets as wwe know we can make instance 
//with help of classes and object and also with help of constructor function.

// To write a functional Constructor it not compulsasary but we as a practice make its first letter as capital.

function Person (name , age){
     this.name = name;
     this.age = age;
    //  console.log(`${this.name} is a user with age = ${this.age}`);
     
}

let user1 = new Person("sahil" , 28); // here to use a fucntional constructor we have to use new keyword .
// console.log(user1.name);
let user2 = new Person ("Rahul" , 44);


// Now lets talk about prototype chaining.

function Animal(type){
      this.type = type;
}
//Now to add a prototype to this above functional constructor we can also inject the prototype with prototype method.

Animal.prototype.speak =  function () {
     return `${this.type} makes a sound. `
}   

//Now lets manipulate some built in object of js

Array.prototype.sahilFunction = function () {
    return `Custom fucntion for Array showing data : ${this}`
}

let arr1 = [1,2,3];