function fetchUserData(){
        return new Promise((resolve , reject)=>{
            console.log("Fetching User Data .... ");
            
          setTimeout(() => {
             resolve({name :"Sahil" , email:"sahildangi0801@gmailc",comment:"Please Hire me"})
            //    reject("Error came as we have commented the resolve haha");
          }, 3000);
        })
}

// fetchUserData()                            // This is how we use promises Now lets see async and await.
//         .then((data)=>{
//             console.log(data);
//         })


async function userData(){
      try {
        const fetchedData  =  await fetchUserData();
        // console.log(`This is the fetched data ${fetchedData}`); // Output:-This is the fetched data [object Object]
                                  // above output case as Json is coming from aove and we and convrting json 
                                  //object in string so fetchedData.toString gives [object Object]
        //How to correct that 
        // console.log("This is the fetched data :-" , fetchedData); // just this simple as now we are now conveting
                       //json to string 
         //Another way
        console.log(`This is te fetched data:- ${JSON.stringify(fetchedData)}`);
                      
                         
      } catch (error) {  // Now anyting we send in reject will go in this error.
        console.log("Some error came" , error);
        
      }
}

userData();
