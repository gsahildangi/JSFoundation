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
// 1.
const squareNumbers = (arr) => arr.map(num => num * num);

// 2.
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 == 0);

// 3.
const sumPositiveNumbers = (arr) => arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

// 4.
const getNames = (arr) => arr.map(name => name.name);

// 5.
const findLongestWord = (arr) => arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");

/*          Code 4 explanation step by step
Step-by-step Explanation:
- Function Definition
const findLongestWord = (arr) => ...
This defines a function named findLongestWord that takes an array arr as input. It’s expected that arr is an array of strings.
- Using .reduce()
The .reduce() method loops through the array and builds up a single return value by comparing values each time.
- Initial Value
The "" at the end is the initial value for the accumulator, starting with an empty string.
- Accumulator Logic
(longest, current) => current.length > longest.length ? current : longest
For each element in the array:
- If the current word’s length is greater than the longest seen so far, return current
- Otherwise, keep returning longest
- Result
After the .reduce() finishes, it returns the longest word in the array.

🔁 Example:
findLongestWord(["cat", "elephant", "dog"]);
// → "elephant"



✨ Alternate Approaches:
1. Using a for loop:

function findLongestWord(arr) {
  let longest = "";
  for (let word of arr) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}


2. Using sort() (less efficient but valid):
function findLongestWord(arr) {
  return arr.sort((a, b) => b.length - a.length)[0];
}


3. Using reduce() with arrow function (same logic, rewritten slightly):
const findLongestWord = arr =>
  arr.reduce((a, b) => a.length >= b.length ? a : b, "");


Each version gets the job done—it just depends on whether you're aiming for readability, performance, or elegance.
Want to level this up with case-insensitive comparison, or maybe get all the longest words in case of a tie? I can help with that too! 😄️✨

*/ 
