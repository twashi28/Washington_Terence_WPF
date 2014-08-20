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
	
	// Calculate for Grade A
}else if (sPercent <= 94 && sPercent >= 90) {
	sGrade = "A";
	alert("You have " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	console.log("You have a " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	
	// Calculate for Grade B+
}else if (sPercent <= 89 && sPercent >= 85) {
	sGrade = "B+";
	alert("You have " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	console.log("You have a " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	
	// Calculate for Grade B
}else if (sPercent <= 84 && sPercent >= 80) {
	sGrade = "B";
	alert("You have " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	console.log("You have a " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	
	// Calculate for Grade C+
}else if (sPercent <= 79 && sPercent >= 76) {
	sGrade = "C+";
	alert("You have " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	console.log("You have a " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	
	// Calculate for Grade C
}else if (sPercent <= 75 && sPercent >= 73) {
	sGrade = "C";
	alert("You have " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	console.log("You have a " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	
	// Calculate for Grade D
}else if (sPercent <= 72 && sPercent >= 70) {
	sGrade = "D";
	alert("You have " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	console.log("You have a " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	
	// Calculate for Grade F
}else if (sPercent <= 69 && sPercent >= 0) {
	sGrade = "F";
	alert("You have " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	console.log("You have a " + sPercent + "%, which means you have earned a(n) " + sGrade + " in the class!");
	
	// Return alert for a valid number
}else{
	alert("Please enter a valid number.");
	console.log("Please enter a valid number");
}
