//Example 1:Accesing the Dom Element.
//First step will bet o grab the element and then we will be able to change it.
//Now the question is what should we grab first the elemtent or the event on which that element is going
//to change.
// document.querySelector(".someID") Now this will give the query with id that resemble to .someID
//document.querySelectorAll(".someID") Now this will give all the query with id that resemle to .someID

//    let hold = document.getElementById("changeTextButton"); 
   
//null ----- gives null when script is in the head part of the document.
// Now when script is in the head so what is happenting is the script file is executed before the DOM
// tree is created. 
 //To solve this we have to put our script file in the last of body or you we can use defr as discussed previously.
    
   // console.log(hold);

   // now as we hold it we can check it console that it is giving all the data thta is full button.

// ******
   // document.getElementById('changeTextButton').addEventListener('click',function () {
   //     console.log(this);

       
   // })  // Now in this as we have made a normal function and thenwhen we are clicking the button ... that 
       // "this" is refering to the caller that is 
       //Button and giving output in console as <button id="changeTextButton">Change Text</button>
   
   //   document.getElementById('changeTextButton').addEventListener('click', () => {
   //   console.log(this);
   // })
   
      //Now when we will use the arrow function in this that that "this " will refer to the global object 
      //and that is Window object. So on clicking this we will get the Window Object

//Now lets code this example

document.getElementById('changeTextButton').addEventListener('click' , function(){
//  console.log(this); // will give full button -<button id="changeTextButton">Change Text</button>
let paragraph = document.getElementById('myParagraph')
// console.log(paragraph); //Output -<p id="myParagraph">This is a Paragraph. Click button to change me!</p>
// console.log(paragraph.textContent); Output:-This is a Paragraph. Click button to change me!
   paragraph.textContent = "The text is changed. Sucessfull"

})

//     Example 2:- Traversing the DOM

document.getElementById('highlightFirstCity').addEventListener('click' ,function (){
      // console.log(document.getElementById('citiesList'))
      // console.log(document.getElementById('citiesList').firstElementChild.classList)
       document.getElementById('citiesList').firstElementChild.classList.add('highlight')
})

//     Example 3:-Manipulating the DOM Elements
   
document.getElementById('changeOrder').addEventListener('click', function(){
  let coffeeTyp =  document.getElementById('coffeeType')
//   console.log(coffeeTyp);
     coffeeTyp.textContent = "Espresso";
     //Now lets add some css to it when user will click the button.
     coffeeTyp.style.backgroundColor = "blue";
     coffeeTyp.style.padding = "5px";
  
})

//     Example 4:-Creating and Inserting Elements

  document.getElementById('addNewItem').addEventListener('click', function(){
         let myTask = document.createElement('li')
         myTask.textContent = "Eggs";
         document.getElementById('shoppingList').appendChild(myTask);
  })


// Example 5: Removing element from DOM

document.getElementById('removeLastTask').addEventListener('click',function(){
     let allTask = document.getElementById('taskList')   
      //   console.log(document.getElementById('taskList'));
            
        allTask.lastElementChild.remove()
;})

//Example 6: Event Handling in DOM

  document.getElementById('clickMeButton').addEventListener('mouseover',function(){
    //Some more we can use are - click , dbclick, mouseover and can check your self.  
   alert("Sahil Dangi");

   })

 //Example 7: Event Deligation.
    
 document.getElementById('teaList').addEventListener('click',function(event){
      // console.log(event); // Now this will give us the event that is happening and other information about it
                           //just by clicking somewhere we can check what our click is pointing out to.
                           // a PointerEvent is triggered.
      //Now in this pointer event there is a method target to know the target of mouse pointer.
      
      // console.log(event.target); //this will give the whole target   <li class="teaItem">::marker "Black tea"</li>
      // console.log(event.target.textContent); // will give the content that mean black tea will come


      
 })