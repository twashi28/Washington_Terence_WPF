/* Terence Washington
 * WPF Section 01
 * Functions Personal
 * 8-28-2014
 */

// Setting variables
var hrPlay = Number(prompt("How many hours in a month is used to play video games\n Play hours:"));

//Re-prompt if hours is empty
if (hrPlay === "") {
	hrPlay = Number(prompt("Please enter your hours of play in a month"));
}

// Setting the function to hold the calculation with a parameter
function calcYear(y){
	year = 12;
	hrYear = y * year;
	return hrYear;
}

// setting an if statement
if (hrPlay >= 160) {
		console.log("Take a break from the games");
	}else{
		console.log("Play on.");
	}

// setting the variable for the calculated answer and print to console
var answer = calcYear(hrPlay);
console.log("In a year, you would have spent " + answer + " hours playing this game.");
