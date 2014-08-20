/* Terence Washington
 * WPF Section 01
 * Grade Letter Calculator
 * 8-19-2014
 */

// set the prompt to input a grade.
var sPercent = parseInt(prompt("Enter your grade", 90));
var sGrade;

// calculating the first range of grade
if (sPercent <= 100 && sPercent >= 95) {
	sGrade = "A+";
	alert("You have " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	console.log("You have a " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
}else if (sPercent <= 94 && sPercent >= 90) {
	sGrade = "A";
	alert("You have " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	console.log("You have a " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
}