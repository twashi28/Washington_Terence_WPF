/* Terence Washington
 * WPF Section 01
 * Conditionals Personal
 * 8-21-2014
 */

// Setting variables
var hrWork = prompt("Enter your hours of work \n Work hours:", 8);

//Re-prompt if age is empty
if (hrWork === "") {
	hrWork = prompt("Please enter your hours of work");
}

var hrSleep = prompt("Enter your sleep hours \n Sleep hours:", 8);

// Re-prompt if time is empty
if (hrSleep === "") {
	hrSleep = prompt("Please enter your hours of sleep");
}

var freeTime = hrWork + hrSleep - 24;
var usedTime = hrWork + hrSleep;
var time;
var result1 = "You have to much time on your hands.";
var result2 = "You need a vacation.";


//Set ternary statment and alerts the results
time = (freeTime >= usedTime) ? alert(result1) : alert(result2);
