/*
                                     //Higher-Order Functions and Arrow Functions


All the following tasks must be strictly be writtern in arrow functions only.

----------------------------------------------------------------------------------------------------------------------

Task 1: Using Array Methods

Write a function squareNumbers(arr) using map() and arrow functions

----------------------------------------------------------------------------------------------------------------------

Task 2: Custom Filter Function

Create a function filterEvenNumbers(arr) using filter() and arrow functions

----------------------------------------------------------------------------------------------------------------------

Task 3: Sum of Positive Numbers

Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

----------------------------------------------------------------------------------------------------------------------

Task 4: Transform Array of Objects

Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

----------------------------------------------------------------------------------------------------------------------

Task 5: Find the Longest Word

Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

 ---------------------------------------------------------------------------------------------------------------------- 
*/ 

//1.
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. 
// The key benefits are:
// Transformation: It transforms each element from the original array.

// Immutability: It doesn't change the original array; instead, it returns a new array with transformed values.
// Parameters

const squareNumbers = (arr) 