/* Terence Washington
 * WPF Section 01
 * Functions Industry
 * 8-28-2014
 */

// set the prompt to input a number
var jobs = prompt("How many positions have you done?", 2);

if (jobs === "") {
	jobs = prompt("Please enter how many positions you have performed."); // Set a prompt to validate input from the user
}
var hour = prompt("How many hours have you worked in each position?", 8);

if (hour === "") {
	hour = prompt("Please enter the position hours."); // Set a prompt to validate input from the user
}

//Set up an else if statement for the jobs prompt
if (jobs == 1){
	console.log("Simple worker");
}else if (jobs == 2){
	console.log("Multitakser");
}else if (jobs >=3){
	console.log("Jack of all trades");
}

//Set up a function with a parameter to handle the calculation and return the answer
var hrsWork = function (h) {
  var work = jobs / h * 100;
  return work;
}
//Set a variable to call the function with an argument and print to the console log
var answer = hrsWork(hour);
console.log("These are the average hours you have worked for the position(s) " + answer + " hrs.");