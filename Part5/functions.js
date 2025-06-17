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

