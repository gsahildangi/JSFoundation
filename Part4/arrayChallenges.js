/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "Oolong tea"]

teaFlavors[0] = "firstTea";

// console.log(teaFlavors[0]);

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
  Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];

let favoriteCity = cities[2];

// console.log(favoriteCity);

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["Herbal Tea", "White Tea", "Masala Chai"]
// console.log(teaTypes);
teaTypes[1] = "Jasmine Tea";
// console.log(teaTypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"]
// console.log(citiesVisited);
let arrLength = citiesVisited.push("Berlin")  // as push method of array return the length of the arr after we push the new item to it.
// console.log(citiesVisited);
// console.log(arrLength);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["Chai", "Iced Tea", "Matcha", "Earl Grey"]
// console.log(teaOrders); 
let poopedItem = teaOrders.pop(); //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(teaOrders);
// console.log(poopedItem);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let popularTeas = ["Green tea", "Oolong Tea" , "Chai" ]

let softCopyTeas =[]

softCopyTeas = popularTeas;
popularTeas.pop();     // when we will check both the array as when we soft copy the " memory address is same " and once we delete data from one array other data also get deleted.
// console.log(popularTeas);

// console.log(softCopyTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin" , "Singapore" , "New York"]

let hardCopyCities = [...topCities]
topCities.pop();
// console.log(hardCopyCities);


/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris" , "Rome" ]
let asianCities = ["Tokyo" , "Bankok"]

//let worldCities = europeanCities + asianCities ;//  This will convert both into a string and will return the string

//let worldCities = [europeanCities  , asianCities] // This will also solve the problem however it will create a structure like [["",""],["",""]]

let worldCities = europeanCities.concat(asianCities); //This is the best way to do this.
// console.log(worldCities);


/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["masala chai" , "oolong tea" , "green tea" , "earl grey"]

let menuLength = teaMenu.length;

// console.log(menuLength);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto" , "London" ,"cape Town" , "Vancour"]

let isLondonInList = cityBucketList.includes("london");

console.log(isLondonInList);
