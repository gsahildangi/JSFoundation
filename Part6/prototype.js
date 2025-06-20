let basicComputer = {
    ram: 4,
    cpu: 12,
    screen: 720
};

let lenovo = {
    screen: 1080,
     __proto__ : basicComputer  // Now what this statement is going to do is it will link the lenevo to the protoypes of 
                               //of basicComputer object so that lenovo can use it easily.      
};

let myHardwareCompany = {
    __proto__   : lenovo

};
// console.log(basicComputer);
// console.log(basicComputer.__proto__); // Output- [Object : null prototype] {} To see the different output past this 
                                      // code in browser console and there you can see the prototypes js 
                                    //give us automatically when we make a object 
                                    //a common exapmle is constructor function is a prototype that js provide 
 
// A prototype in JavaScript is an object that other objects inherit properties and methods from.
// Every JavaScript object has a prototype, which acts as a template for sharing functionality.
// When you create an object(for example, using a constructor function), JavaScript automatically 
// links it to a prototype, allowing objects to share common behavior efficiently.This is the foundation 
// of JavaScript’s inheritance system.

//Now lets check that when we link the basicComputer __proto__ in lenovo object .Lets try to use the 
//functionality of basicComputer object in lenevo object

console.log(`Using basicComputer functionality : ` , lenovo.screen); // as this screen is common in both the objects
                    // so this lenovo pick up its screen feature and output is  "1080"

console.log(`Now using lenovo feature in myHardware company :`, myHardwareCompany.ram);
console.log('Lets try to print every __proto__of "basicComputer" all the object when they link to each other :', basicComputer.__proto__ );
console.log('Lets try to print every __proto__of "lenovo" all the object when they link to each other :', lenovo.__proto__ );
console.log('Lets try to print every __proto__of  "myHardware " all the object when they link to each other :', myHardwareCompany.__proto__ );

// Output: DO check this and find out what is going on.
// Lets try to print every __proto__of basicComputer all the object when they link to each other : [Object: null prototype] {}     
// Lets try to print every __proto__of "lenovo" all the object when they link to each other : { ram: 4, cpu: 12, screen: 720 }
// Lets try to print every __proto__of "myHardware" all the object when they link to each other : { screen: 1080 }


