// CallBacks

// function loadScript(src, callback ,x) {
//     var script = document.createElement('script');
//     script.src = src;
//      script.onload = function () {
//         console.log("Script Loaded " + src);
//         callback(x);
//      }
//     document.body.appendChild(script)  
    
// }

// function helloFun(name) {
//     alert("HelloFun called by :" + name)
// }

// function byeFun() {
//     alert("ByeFun called...")
// }

// loadScript("#Some script added",helloFun ,"Sahil");

// Now lets talk about call back hell.
// Now lets try to imitate a call back hell

// function getData(dataID , getNextData){
//       //2s
//       setTimeout(()=>{
//           console.log("Data" , dataID);
//           if(getNextData){
//             getNextData();
//           }
        
//      },2000);
     
// }
//Now when we are doing this all the data is coming together after 2 sec 
// getData(1); 
// getData(2);
// getData(3);

// Now we want to log not together but 2sec gap -data 1 - 2sec - data2 - 2sec - data3
// To do that we have to use callbacks .
// In callbacks we send fucntion as parameter 
//     getData(1 , ()=>{
//            console.log("Fetching Data2");
       
//         getData(2 , ()=>{
//                    console.log("Fetching Data3");
//             getData(3);
//         })
//     })  
//As we see the above code become so hard to read this problem is called callbacks hell.

//Now to handle this problem a new solution is provided and that is called "Promises"

// A promise to execute a particular task and five reolve , reject on successfull and unsuccessful execution respectively.
// Lets do this now with promise chaining.
function getData(dataID , getNextData){
    return new Promise((resolve, reject) => {
    //2s
      setTimeout(()=>{
          console.log("Data" , dataID);
          resolve("Data Fetched successfully")
      },2000);
   }) 
}

getData(1).then((res)=>{
     console.log(res);
     getData(2).then((res)=>{
        console.log(res);
        
     })
})
    

