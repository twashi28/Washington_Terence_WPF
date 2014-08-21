/* Terence Washington
 * WPF Section 01
 * Conditionals Personal
 * 8-21-2014
 */

// Setting variables
var hrWork = Number(prompt("Enter your hours of work a day\n Work hours:"));

//Re-prompt if age is empty
if (hrWork === "") {
	hrWork = Number(prompt("Please enter your hours of work a day"));
}

var hrSleep = Number(prompt("Enter your sleep hours a day\n Sleep hours:"));

// Re-prompt if time is empty
if (hrSleep === "") {
	hrSleep = Number(prompt("Please enter your hours of sleep"));
}

// Setting variables to hold input values
var usedTime = hrWork + hrSleep;
var time;

//Setting variables to hold string results
var result1 = "You need a vacation.";
var result2 = "You have time on your hands.";


//Set ternary statment and alerts to print results
time = (usedTime >= 18) ? alert(result1) : alert(result2);
console.log(usedTime);
