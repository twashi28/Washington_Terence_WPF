/*
 * Terence Washington
 * WPF Section 01
 * Expressions Wacky
 * 8-14-2014
 */

// setup an array of ranom numbers
var random = [3, 45, 23, 89, 84, 466];

// Print the inputs to the console
var day = prompt ("Type the number of the day of your birthday. \n 1 -  31:");
var yawn = prompt ("How many times have you yawned today? \n Yawns:");
var age = prompt ("How old are you today? \n age:");

//adds the inputs together
var sum = Number(day) + Number(yawn) + Number(age);

// multiplies the sum total by the second array element
var ranTotal = sum * random[1];



// Print the prompt inputs to the console
console.log(day);
console.log(yawn);
console.log(age);
console.log(sum);

//set the result in a concatening string
var result = "Your wacky answer is " + ranTotal;

//print the wacky total to console
console.log(ranTotal);

//alert the result back to the user
alert(result);
