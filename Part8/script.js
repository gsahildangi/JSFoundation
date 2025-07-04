//Example 1:Accesing the Dom Element.
//First step will bet o grab the element and then we will be able to change it.
//Now the question is what should we grab first the elemtent or the event on which that element is going
//to change.
// document.querySelector(".someID") Now this will give the query with id that resemble to .someID
//document.querySelectorAll(".someID") Now this will give all the query with id that resemle to .someID

   let hold = document.getElementById("changeTextButton"); 
   //null ----- gives null when script is in the head part of the document.
   // Now when script is in the head so what is happenting is the script file is executed before the DOM
  // tree is created. 
  //To solve this we have to put our script file in the last of body .
    
   console.log(hold);

   console.log("this is just an example");
   
   