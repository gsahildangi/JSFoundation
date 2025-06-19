/*                            
                           //Arrays and Methods


Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

-----------------------------------------------------------------------------------------------------
Task 1: Array Filtering

Write a function filterNumbers(arr) that returns only numbers from a mixed array

-----------------------------------------------------------------------------------------------------

Task 2: Array Reversal

Write a function reverseArray(arr) that reverses the array

-----------------------------------------------------------------------------------------------------

Task 3: Find Maximum in an Array

Write a function findMax(arr) that returns the largest number in the array

-----------------------------------------------------------------------------------------------------

Task 4: Remove Duplicates from an Array

Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

-----------------------------------------------------------------------------------------------------

Task 5: Flatten a Nested Array

Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
-----------------------------------------------------------------------------------------------------
                                        Solutions :-
*/ 
//1.
function filterNumbers(arr) {
   const result = arr.filter((someArray)=> typeof someArray === 'number' ) 
  return result;
}
//2.
function reverseArray(arr) {
      
  return arr.reverse();
}
// 3.
function findMax(arr) {
    
  return Math.max(...arr);
}
// 4.
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 5.
function flattenArray(arr) {
  return arr.flat(Infinity);
}
