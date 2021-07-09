// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// Thought process: There are three cases for a given temperature
// 1) temp is at the boiling pt
// 2) temp is below boiling pt
// 3) temp is above
// This is where we want to use conditionals to return the outcome.

// use a const for the boiling point because it doesn't change
const boiling = 212 // boiling point in fahrenheit

// Check if a given temperature is at, below, or above the 
// 212 degrees boiling point and returns the result as a string.
const boilingPoint = (temp) => {
    if (temp === boiling) { // boiling point
        return `${temp} is at boiling point`
    } else if (temp < boiling) {    // below boiling point
        return `${temp} is below boiling point`
    } else {    // above boiling point
        return `${temp} is above boiling point`
    }
}

// use test variables
console.log(boilingPoint(temp1)) // 35 is below boiling point
console.log(boilingPoint(temp2)) // 350 is above boiling point
console.log(boilingPoint(temp3)) // 212 is at boiling point
console.log()

// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]


// Thought process: Combine the arrays, possibly with .concat() and
// then .sort() on that array. The .concat() method does not 
// change the original array, but returns a new array.
// To use the .sort() method properly on numbers, we have to give
// it a parameter that will tell the function how to sort. 
// Otherwise, using .sort() with no argument will convert the values as
// strings, and compare them character by character,
// resulting in [-7, -9, 0, 13, 22, 3, 36, 7, 8, 9].
// So the char - comes before the number. 7, 8, 9 are at the end
// because of the first index of the numbers 13, 22, 3, 36.
// We'll fix this by using the function (a, b) => a - b as the argument.
// This takes the difference of a from b, and the value
// returned will pass into Javascript's compare(a, b) method. 
// From the MDN Web Docs,
// If compareFunction(a, b) returns a value > than 0, sort b before a.
// If compareFunction(a, b) returns a value ≤ 0, leave a and b in the same order.
// So the compare function from Javascript will check the returned value
// from our function and compare that value with 0. Positive values
// will be swapped and negative values or 0 will stay in place.
// For example, if we compare several values in the array:
// compare(3, 7) = 3-7 = -4, negative, [3, 7] stays in place
// compare(7, 0) = 7-0 = 7, positive, swap to [0, 7]
// compare(36, -9) = 36-(-9) = 45, positive, swap to [-9, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

const sortTwoArrays = (arr1, arr2) => {
    var combinedArray = arr1.concat(arr2)   // combine arrays
    combinedArray.sort((a, b) => a - b)     // sort with given function
    return combinedArray
}

console.log(sortTwoArrays(myNumbers1, myNumbers2))
console.log(sortTwoArrays([7], [0])) // 7 - 0 = 7, positive, swap => [0,7]
console.log(sortTwoArrays([0], [0])) // 0 - 0 = 0, stay in place
console.log(sortTwoArrays([0], [7])) // 0 - 7 = -7, negative, stay in place


// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"


// Thought process: The built-in method .reverse() can be used here, but
// it operates on arrays and not strings, so we must first convert the 
// given string to an array of chars. Then we can .join() the chars to
// convert the array back into a string to return it.
// Note that split("") will take a parameter to split on an empty string,
// which is after every character, so that we have an array of chars.
// Similarly, join("") will combine the values without any characters between.

var myString1 = "bravo"
var myString2 = "charlie"

const reverseString = (str) => {
    var strToCharArray = str.split("")  // convert to char array
    strToCharArray.reverse()            // reverse the array of chars
    return strToCharArray.join("")      // convert back to string
}

console.log(reverseString(myString1))   // ovarb
console.log(reverseString(myString2))   // eilrahc

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19



// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24
