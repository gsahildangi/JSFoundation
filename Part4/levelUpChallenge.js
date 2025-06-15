/*
1. Write a 'for' loop that loop through the array ["green tea", "black tea" , "chai" ,"oolong tea"]
   and stops the loop when it finds "chai".
      Stores all the tea before "chai" in a new array named 'selectedTea'.
*/
let arrTea = ["green tea", "black tea", "kadha" , "chai", "oolong tea"];
let selectedTea = []
for (let i = 0; i < arrTea.length; i++) {
      if (arrTea[i] === "chai")
      {
        break;
      }
      else {
        // selectedTea[i] = arrTea[i]
        selectedTea.push(arrTea[i])
      }
}
//  console.log(selectedTea);

/*
2.Write a for loop that loops through array ["London", "New York" ,"Paris","Berlin"]  - and skip the "Paris" .
   Store the other cities in a new array named 'visitedCities'
*/ 

 let arrCities =  [ "London" , "New York" , "Paris" , "Berlin" ]
 let visitedCities = []
 
 for (let i = 0; i < arrCities.length; i++) { 
     if (arrCities[i] ===  "Paris" || arrCities[i] === "paris"){
        continue;
     }   
    
     //visitedCities[i] = arrCities[i]   //[ 'London', 'New York', <1 empty item>, 'Berlin' ] This output came with this 
     visitedCities.push(arrCities[i]);  //[ 'London', 'New York', 'Berlin' ] so this shows that usin inbuilt function is good.
}
  // console.log(visitedCities);
 
/*
3. Use a 'for-of' loop to itterate through the array of numbers [1 , 2 , 3 , 4 , 5 ] and stop when the number '4'
    found . Store all the numbers before '4' in a new array named 'smallNumbers'
*/ 

let arrNumbers = [1 , 2 , 3 , 4 , 5] ;
let smallArray = []

for (const num of arrNumbers) {
   if (num === 4)
     {
      break
     }
     else{
      smallArray.push(num)
     }
    
}
// console.log(smallArray);

/*
4. Use a 'for-in' loop to loop thorugh the object containing city population. 
      Stop the loop when the population of "Berlin" is found and store all previous cities popultiaon
      in a new object named 'cityPolulation'

       let citisPopulation ={
        "London" : 8900000 ,
        "New York " : 8400000 ,
        "Paris" :2200000 ,
        "Berlin" : 3500000
       };
*/ 

       let citisPopulation ={
        "London" : 8900000 ,
        "New York" : 8400000 ,
        "Paris" :2200000 ,
        "Berlin" : 3500000
       };

let cityPolulation = {}
 
//  console.log(citisPopulation);
 
//  console.log(Object.keys(citisPopulation)); // This will give us the keys in the object. Output:- [ 'London', 'New York ', 'Paris', 'Berlin' ]
//  console.log(Object.values(citisPopulation)); // This will give us the values only that are in the object. Output:- [ 8900000, 8400000, 2200000, 3500000 ]
 
for (const city in citisPopulation) {
       if(city === "Berlin"){
        break;
       }
       else{
       cityPolulation[city]  = citisPopulation[city]
       }
    }
    // console.log(cityPolulation);
    
/*
5. Use a 'for-in' loop to loop through an object containing city populations.
  Skip any city  with the population below 3 Million and store the rest in the new object named 'largeCities'
  
   let worldCities = {
      "Sydney": 5000000 ,
      "Tokyo" : 9000000 ,
      "Berlin": 3500000 ,
      "Paris" : 2200000 
    };

*/ 
 
 let worldCities = {
      "Sydney": 5000000 ,
      "Tokyo" : 9000000 ,
      "Berlin": 3500000 ,
      "Paris" : 2200000 
    };

  let largeCities = {}
     
  for ( const cities in worldCities){
     if(worldCities[cities] < 3000000){
        continue;
     }   
     else {
    largeCities[cities] = worldCities[cities]
     }
    //  console.log(worldCities[cities]);
  }
// console.log(largeCities);

// Note:- Now when we want to access the full object access it through its name. Now in a for in loop where we are traversing through the key
//        Then there we can access it not though "." but with "[]" . now 
//   console.log(worldCities) --> This will give the full object
//   console.log(cities) --> This will give us the keys of the object that we are traversing i.e {"sydney" ,"Tokyo", "Berlin"}
//   console.log(worldCities[cities]) --> Now this will give us the "values" of the particular key .

/*
6. Write a 'ForEach loop' that iterates through the array ["earl Grey", "green tea" ,"chai", "oolong tea"].
   Stop the loop when "chai" is found , store all the previous tea types in the array named "availableTeas"

*/ 
    let arrTeas =  ["earl Grey", "green tea" ,"chai", "oolong tea"] ;
    let availableTeas = []
    arrTeas.forEach((tea)=> {
          if(tea === "chai" || tea === "Chai"){
             return;
          }
            availableTeas.push(tea);
          
   });

    // console.log(availableTeas);
 
/*
7. Write a 'forEach' loop that iterates through an array '["Berlin","Tokyo","Sydney","Paris"]'. 
   Skip "Sydney" and store the other cities in a new array named 'traveledCities'
*/  
let allCitiesArr = ["Berlin","Tokyo","Sydney","Paris"];

let traveledCities = []

allCitiesArr.forEach((cities)=>{
          if (cities === "Sydney"){
              return ;
          }
          else {
        traveledCities.push(cities)
           }
   });
   console.log();
   
