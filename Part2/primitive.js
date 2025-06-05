let bal = 120;
let anotherbal = new Number(120);//not recommended

console.log(bal);
console.log(anotherbal);

console.log("");

console.log(typeof(bal));
console.log(typeof(anotherbal));

//Boolean

let isActive = true;  // primitive type
let isReallyActive = new Boolean(false); // again not recommended but this is convering primitive in non primitive

//null and undefined
let firstName;
console.log(firstName); // now this will be undefined that mean it is present and value is not known

let lastName = null ;
console.log(lastName); // This is a example of null which is that last name has a value and which is null.

// String

let myString = "hello"
let hisString = 'Hola'
let userName = 'sahil'

let oldgreet = myString;

let greetMessage = `Hello ${userName} !`  
console.log(greetMessage);



//Symbol 
//symbol is the build in object whose custructor returns a Symbol()- and its gurrante is that 
//it is unique
let sm1 = Symbol() // This is how you make a symbol.
let sm2 - Symbol() // This is also a symbol but these are not same 

// console.log(sm1 == sm2); //false
//Even if we do this
// let sm1 = Symbol("Sahil")
// let sm2 = Symbol("Sahil")
//still the ans to the below statement will be false as symbol gurantee a unique value or key.
// console.log(sm1 == sm2); //false




