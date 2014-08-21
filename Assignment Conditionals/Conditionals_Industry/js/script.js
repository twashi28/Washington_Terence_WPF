/* Terence Washington
 * WPF Section 01
 * Conditionals Industry
 * 8-21-2014
 */

// set the prompt to input an amount.
var speed;
var boxes = prompt("How many boxes have you picked?", 90);
var hour = prompt("How many hours have you worked?", 8);
var rate = boxes / hour;

// Set a prompt to validate input from the user
if (boxes === "") {
	boxes = prompt("Please enter the amount of boxes you have picked.");
}
if (hour === "") {
	hour = prompt("Please enter the amount of hours you have worked.");
}


// determining the speed for the first range
if (boxes >= 100 || boxes >= 90) {
	speed = "very fast";
	alert("You have done " + boxes + " boxes per hour, which means you are " + speed + " in production. Your rate is " + rate + " per hour.");
	console.log("You have done " + boxes + " boxes per hour, which means you are " + speed + " in production. Your rate is " + rate + " per hour.");
	
// determining the speed for the second range
}else if (boxes <= 89 && boxes >= 80) {
	speed = "fast";
	alert("You have done " + boxes + " boxes per hour, which means you are " + speed + " in production. Your rate is " + rate + " per hour.");
	console.log("You have done " + boxes + " boxes per hour, which means you are " + speed + " in production. Your rate is " + rate + " per hour.");
	
// determining the speed for the third range
}else if (boxes <= 79 && boxes >= 70) {
	speed = "normal";
	alert("You have done " + boxes + " boxes per hour, which means you are " + speed + " in production. Your rate is " + rate + " per hour.");
	console.log("You have done " + boxes + " boxes per hour, which means you are " + speed + " in production. Your rate is " + rate + " per hour.");
	
// determining the speed for the forth range
}else if (boxes <= 69 && boxes >= 60) {
	speed = "slow";
	alert("You have done " + boxes + " boxes per hour, which means you are " + speed + " in production. Your rate is " + rate + " per hour.");
	console.log("You have done " + boxes + " boxes per hour, which means you are " + speed + " in production. Your rate is " + rate + " per hour.");
	
// determining the speed for the fifth range
}else if (boxes <= 59 && boxes >= 0) {
	speed = "very slow";
	alert("You have done " + boxes + " boxes per hour, which means you are " + speed + " in production. Your rate is " + rate + " per hour.");
	console.log("You have done " + boxes + " boxes per hour, which means you are " + speed + " in production. Your rate is " + rate + " per hour.");
}