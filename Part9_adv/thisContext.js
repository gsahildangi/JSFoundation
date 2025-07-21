const person = {
    name : "Sahil",

    greet : function(){
     console.log(`Hy! My name is ${this.name}`);
    }
}

person.greet(); //Hy! My name is Sahil
const anotherGreet = person.greet;      
anotherGreet();  // Hy! My name is undefined

const referencedGreeting = person.greet.bind({name: person.name})
referencedGreeting(); // Now we have bind the context with this now referecedGreeting know which name 
                    // this.name is refering 
// You can see that while passing the reference of fucntion it lost its context 

//const module = {
//   x: 42,
//   getX() {
//     return this.x;
//   },
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // Expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // Expected output: 42
 
//Here we can see that we have binded the bountGetX with module so now it know that getX is bound to moudle 
//and also can use value of object module.

//***
// Return value
// A copy of the given function with the specified this value, and initial arguments (if provided).

//                                      bind , call and apply 

//bind(), call(), and apply()—are essential tools in JavaScript for controlling the value of this
// inside functions. Whether you're just starting out or diving into advanced patterns, mastering
// them will level up your understanding of function execution and object behavior.


//appyly()
// The apply() method of Function instances calls this function with a given this value, and arguments 
// provided as an array (or an array-like object) .

