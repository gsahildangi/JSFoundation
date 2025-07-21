function fetchPostData(){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
             resolve("Post Data fetched.")        
            //  reject("Error fetching fetchPostData.")
       },4000);
    })
}
 //Note:- Just using setTimeout to simulate the server behaviour we can also directly use resolve in promise body.

 function fetchCommentData(){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("Comment Data Fetched.")
            reject("Error fetching fetchCommentData.")
        }, 1000);
     })
}

//Now use simple .then() and .catch() on both of them and try to use it just for practice.

// function fetchData(){
// fetchPostData()
//         .then((data)=>{
//             console.log(data);
//         })
// fetchCommentData()
//        .then((data)=>{
//         console.log(data);
//        })
//     }   
//     fetchData();
//Outpur :- Comment Data Fetched.
//          Post Data fetched.

// Now here the data is comming on the basic of time which we are providing the the promise will less time 
//will reflect first on the log and then the second one came in the picture.

//Now lets do this with async and await 

async function getBlogData() {
    try{                                   // Dev Advice :-Always handle the error part first.
  const postData = await fetchPostData();
  console.log(postData); // this will prove out below paragrah as we have called fetchPostData first now 
       //Now as we have resolve this log will show the data and in next part we have rejected it then after
       //first printing error will invoke.
  const commentData = await fetchCommentData();
  console.log(commentData);    // In this the output is coming on the basic of time we log  this on console
                               // now first comment data will come and then post if we log post first then post 
//                          //one will appear no matter what time we have provided.
  

    }catch(error){ // In this error part the reject data will come here in this error. That also mean that promise is not complete.
        console.log("Some error came ", error);
        //here output is dependent on the time we call the promise for exp: when we call the postData first 
        //and now rejection came form both the promise however just when the reject came it will go to try 
        //block and then further comment data will not work 
        //This also mean first one promise will resolve or reject then it will go to next promise if on the 
        //first go rejcteion came in first promise then it will not execute the other promise.

        //To cop up with this we can use different try catch block for both the promises .
    }
//Now lets try this with one more method. 
//Better method -Promise all in which we handle all the promise in one go.
  
     const [postData ,commentData] = await Promise.all([fetchPostData(),fetchCommentData()])

}


getBlogData();