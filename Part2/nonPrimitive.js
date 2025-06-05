let userNameObj = {
    firstName : 'Sahil',
    lastName : 'Dangi',
    isLogedIn = true,
    'bio data' : "This is a biodata variable" // line-no-25 - Now the ques is how we can access this variable as we will not be able o access this using "." operator.
}
/*
const var1 = "Medanta";

 var1 = "Medical"  - this will give error as var1 is a const primitive variable. Now this will not work in same way in obj.

const userNameObj = {
    firstName : 'Sahil',
    lastName : 'Dangi',
    isLogedIn = true
  }
    Now here the memory location of this obj is fixed however we can chage the inside data of this object.
   i.e if you wnat to perform this 
        userNameobj.firstName = "Shyam"  - This is a valid operation also we can add new features also to an object.
        userNameObj.age = 10; - You can do this also
    
     */

    //Now what happen when there is a space in variable like 'first name'
    console.log(userNameObj["bio data"]); 
    


console.log(userNameObj);
console.log(typeof(userNameObj));

                                                           //Arrays
//Array stands for collection of similar datatypes.
//In array the above statement is not true. 

let anoter






