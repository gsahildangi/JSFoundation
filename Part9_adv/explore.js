console.log("hello from console log side");
//Now here we want to use a time fuction in between these two code till now js is following a syncronous till we
//use setTimeout now we have observed a different behaviour in which all code is compiled first and then
// after a particular time that we provided in the last it execute .
// Now problem in this is that we have write it in between for loop and function.so why it came in last?

//Ans to this using Ai.

function bubbleDemo() {
    console.log("Hello from bubbleDemo funciton using settimeout");
    
}

setTimeout(()=>{
    bubbleDemo()
},5000);


for (let index = 0; index < 15; index++) {
     console.log(index);
         
}


