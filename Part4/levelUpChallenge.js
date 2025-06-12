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
  console.log(visitedCities);
 
/*
3. Use a 'for-of' loop to itterate through the array of numbers [1 , 2 , 3 , 4 , 5 ] and stop when the number '4'
    found . Store all the numbers before '4' in a new array named 'smallNumbers'
*/ 

let arrNumbers = [1 , 2 , 3 , 4 , 5] ;
let smallArray = []

for (const element of object) {
    
}