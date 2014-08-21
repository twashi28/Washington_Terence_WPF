/* Terence Washington
 * WPF Section 01
 * Conditionals Industry
 * 8-21-2014
 */

// set the prompt to input an amount.
var speed;
var boxes = prompt("How many boxes have you picked?", 90);

// Set a prompt to validate input from the user
if (boxes === "") {
	boxes = prompt("Please enter the amount of boxes you have picked.");
}


// determining the speed for the first range
if (boxes >= 100 || boxes >= 90) {
	speed = "very fast";
	alert("You have done " + boxes + " boxes, which means you are " + speed + " in production.");
	console.log("You have done " + boxes + " boxes, which means you are " + speed + " in production.");
	
// determining the speed for the second range
}else if (boxes <= 89 && boxes >= 80) {
	speed = "fast";
	alert("You have done " + boxes + " boxes, which means you are " + speed + " in production.");
	console.log("You have done " + boxes + " boxes, which means you are " + speed + " in production.");
	
// determining the speed for the third range
}else if (boxes <= 79 && boxes >= 70) {
	speed = "normal";
	alert("You have done " + boxes + " boxes, which means you are " + speed + " in production.");
	console.log("You have done " + boxes + " boxes, which means you are " + speed + " in production.");
	
// determining the speed for the forth range
}else if (boxes <= 69 && boxes >= 60) {
	speed = "slow";
	alert("You have done " + boxes + " boxes, which means you are " + speed + " in production.");
	console.log("You have done " + boxes + " boxes, which means you are " + speed + " in production.");
	
// determining the speed for the fifth range
}else if (boxes <= 59 && boxes >= 0) {
	speed = "very slow";
	alert("You have done " + boxes + " boxes, which means you are " + speed + " in production.");
	console.log("You have done " + boxes + " boxes, which means you are " + speed + " in production.");
}