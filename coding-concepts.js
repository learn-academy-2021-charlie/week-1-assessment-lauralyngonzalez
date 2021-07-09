// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.length)

// a) Your answer: 12
// b) Verify and explain: Correct, because the method .length returns the length of the string.


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain: Correct, strings have indexes and are also zero-based, so H is 0, e is 1, l is 2, and the second l is 3.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Correct, languages is an array and also 
// has indexes which are zero-based. JavaScript is at 0 and Ruby is at 1.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: Incorrect, the code has a TypeError
// because weekendDays.toUpperCase() is not a function. The method
// .toUpperCase() has to be used on a string and not an array.
// So to use this method we would have to use each index and use
// the method on each value, such as weekendDays[0].toUpperCase().
// console.log(weekendDays[1].toUpperCase())

// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: Correct, dataTypes.length returns the
// length of the array which is 3, then uses the typeof operator on 3
// which is the primitive data type, number.
