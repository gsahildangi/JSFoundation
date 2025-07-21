function Person(name){
    this.name = name;
    }

Person.prototype.greeting = function () {
    //  console.log(`Hy! My name is ${this.name}`);
    return `Hy! My name is ${this.name}`
}

let person1 = new Person("Sahil") 
let message = person1.greeting();
console.log(message);

// So it turns out treat us just one thing.
// So prototypal inheritance and notice here,
// hello, my name is Hitesh.
// And the access, the two things, the ability to
// actually inject anything into this function, this is that
// means I am capable of doing the prototypal inheritance
// here and also access to this state.
// That means I know, how can I access these variables?
// This is it.

// This is your prototypal inheritance.
// So the whole idea in the JavaScript is object
// inherit properties from other objects via prototype chain.
// And this is your prototype chain.
// Each object has a hidden property which is treated
// something like this [[]], and then further this[[Prototype]], and then
// you might have seen this proto type.

// It's actually mentioned quite a lot in their official docs
// and their guidelines to apply these docs as well.
// So each object has this hidden prototype property
// that refers to another object, its prototype.
// And if a property can be found, you can actually go
// ahead and manipulate it like this and works like that.