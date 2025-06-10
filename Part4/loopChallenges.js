/*
1. Write a 'While' loop that calculates the sum of all the number from 1 to 5 and store the result in a variable
   name 'sum'
*/
let  i = 0 ;
let sum = 0;    
while(i <=5){
 sum = sum + i;
 i++;
}
// console.log(sum);

/*
2. Write a 'while ' loop that counts down from 5 to 1 and stores the number in an array named 'countdown'
*/
let x = 5 ;
let countdown = [0]; 
while  (x >= 1) {
 // console.log(x);
    countdown[x-1] = x ;
    x--; 
}
// console.log(countdown);
// Way 2 :- 
let x1 = 5
let countdown1 =[]
while (x1 > 0 ){
 // console.log(x1);
    countdown1.push(x1);
    x1--;
}
// console.log(countdown1);

/*
3.Write a 'do while' loop that prompts a user to enter thier favourite tea type until they enter '"stop"'.
  Store each tea type in array name 'teaCollection'
*/ 
// let teaCollection = []
// let tea;

// do {
// // tea = prompt(`Enter your favourite tea (Enter "stop" to exit)`);
// if(tea !== "stop"){
//     // teaCollection.push(tea);
// }

// }while(tea !== "stop");

/*
4. Write a 'do while' that adds a number from 1 to 3 and store the result in variable name total.
*/ 
let total =0;
let j = 1;
do {
   total = total +j
   j++;
}while(j < 4);
// console.log(total);

/*
5. Write a 'for' loop that multiplies each element in the array '[2, 4,6]'  by 2 and stores the results in a new array 
   'multipliedNumber'
*/ 
let multipliedNumber = [];
let numberArr = [2,4,6]

for (let i = 0; i < numberArr.length ;i++){
   //Way 1:
   // let temp = numberArr[i];
   // temp = temp * 2;
   // numberArr[i] = temp ;
   //Way 2:
//   let temp  = numberArr[i] * 2 ;
//    multipliedNumber.push(temp); 
   //Way 3:
   multipliedNumber.push(numberArr[i] *2)
}
// console.log(multipliedNumber);

/*
6. Write a 'for' loop that lists all  the cities  in the array '["Paris" , "New York",  "Tokyo" , "London"]'
   and stores each city in a new array named 'cityList'. 
*/ 
let arrayCities = ["Paris" , "New York",  "Tokyo" , "London"]
let cityList = [];
for(let l = 0 ; l < arrayCities.length; l++){
   console.log(arrayCities[l]);
    
   cityList[l] = arrayCities[l] 
}
// console.log(cityList)


