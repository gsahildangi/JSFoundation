/*
1. Write a function named 'makeTea' that takes one parameter 'typeOfTea' , and then return a String like 
    'Making italian tea' when called with 'italian tea' .
    Store the result in a variable name 'teaOrder' 
*/ 

function makeTea ( typeOfTea ){
     return(" Making " + typeOfTea)
}
 let teaOrder = makeTea("Italian tea")
 teaOrder = makeTea ("Indian cha")
//  console.log(teaOrder);
 
/*
2. Write a function   name 'orderTea' that takes once paramerter, 'teaType'. Inside this function, create 
  another function named 'confirmOrder' that return a message like 'Order confrim for chai'.
  Call 'confirmOrder' from within 'orderTea' and return the result.
*/ 
 
 let teaOrderConfirmed;

  function orderTea ( teaType ) {
    
    function confirmOrder() {
        return `Order confim for ${teaType}`
    }
     teaOrderConfirmed = confirmOrder()
    return teaOrderConfirmed
    //return confirmOrder()  // this will save alot of statememts 
  } 
  orderTea("Desi Chai")
// console.log(teaOrderConfirmed);

/*
3.Write a arrow function named 'calculateTotal' that takes two parameter : "price" and "quatity". The function 
  should return the total cost by multiplyin the 'price' and 'quantity'
  Store the result in a variable named 'totalCost'
*/ 
//Ways to create a fuction. Lets see

// function funName ( Paramerters ) {
    // This is function body where you can access the parameter . And these parameter will came from function call as argument passed by user.
//}
// Now let's try to make a arrow function

// const arrowFunc = ( Parameters ) => {
    // function body
// }
let totalCost;
 const calculateTotal = ( price , quantity ) => {
     return (price * quantity)
    }
// const calculateTotal = ( price , quantity) => price * quantity // Example of explict return where we are returning without return statement and we also get rid of brackets.

    totalCost = calculateTotal(10 , 45 )
  // console.log(totalCost);
  
/*
4. Write a function named 'processTeaOrder' that takes another function , 'makeTea' , as  a parameter and calls it with the argument  
   'earl grey'
   Return the result of calling 'makeTea' 
*/ 

//This is a example of higher order function

function makeTea( param ) {
    return param;
}
function processTeaOrder (teaFunction)  {
       return teaFunction('earl grey')
  }

  let printValue = processTeaOrder(makeTea);
  // console.log(printValue);
 
/* 
   //          This is a exapmple of function nesting in which a function inside a function can access the parameter of parent function.
5. Write a function named 'createTeaMaker' that returns another function .The returned function should take one parameter , 'teaType'
   and return a message like "'Making Green Tea'".
   Store the returned function in a variable name 'teaMaker' and call it with "Green tea"
*/ 
 // This method is doing the work 'but' we are not returning a function that is asked in the question. we are returning string in both the cases
  //  function createTeaMaker() {
  //     function fun (teaType){
  //        return `Making ${teaType}`
  //     }
  //     return fun('Green Tea')
  //  }

  //  let printTheValue = createTeaMaker()
  //  console.log(printTheValue);
   
   function createTeaMaker (name , order){
          return function (teaType){
               return `Making ${teaType} for ${name}. The order Number is ${order}` // Here this is example that inner function is accesing the parameter of parent function.
          }
   }
   let teaMaker = createTeaMaker("Sahil" , 33); // above as we are returning a funciton so this teaMaker has instance of that function so we can call that fucntion 
                                     // with help of teaMaker ex: teaMaker() this will envoke the function which is inside that createTeaMaker . Which is also returned by createTeaMaker.
   let printThisValue = teaMaker("Green sharbat")
   console.log(printThisValue);
   