function fetchData() {
    return new Promise ((resolve, reject)=>{
       
       setTimeout(()=>{   //Here we are just similating a situation where a sever is responsing or some time 
                          //taking activity is going on.
            let status = true;              
            if (status) {
                resolve("Data Fetched sucessfully") //We can send any data here ex: object, array, String
                                          //Now when using promise .then() is going to use it it will sent it there.
            }    
            else{
                reject("Some fetching error came")//We can send any data here ex: object, array, String
                              //Now this will send data to .catch() while using the promise.
            }
       },3000);
       })
    
}//Now how to use this promise .
// Now when we call the fuction fetchData() it will give a Output - " Promise <pending> "
//Promise has 3 states - pendind, fullfiled, reject.

// let response = fetchData();
// console.log(response); //Output- "Promise <pending>"

// fetchData()
//     .then (()=>{}) we can "CATCH" the resolve() data here wheather it is object, array or string.
//     .catch(()=>{}) we can "CATCH" the reject() data here wheather it ia object, array or string.

fetchData()  // This data and error is nothing just a variables catching the data from .then() and .catch()
     .then((data)=>{
           console.log(data);
        //   return `${data} - "This is the data "`
            return data.toLowerCase(); 
     })   
     .then((value)=>{
        console.log(value);
        
     })
     .catch((error)=>{
        console.log(error);
        
     })
