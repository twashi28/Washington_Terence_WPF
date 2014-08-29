/* Terence Washington
 * WPF Section 01
 * Functions Industry
 * 8-27-2014
 */

// set the prompt to input an amount.
var speed;
var boxes = prompt("How many boxes have you picked?", 90);

if (boxes === "") {
	boxes = prompt("Please enter the amount of boxes you have picked."); // Set a prompt to validate input from the user
}
var hour = prompt("How many hours have you worked?", 8);

if (hour === "") {
	hour = prompt("Please enter the amount of hours you have worked."); // Set a prompt to validate input from the user
}

// Set the calculation for the rate of speed
var rate = boxes / hour;


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