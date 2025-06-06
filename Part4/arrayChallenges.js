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
console.log(teaOrders); 
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
popularTeas.pop();     // when we will check both the array it i
console.log(popularTeas);

console.log(softCopyTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin" , "Singapore" , "New York"]


