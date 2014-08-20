/* Terence Washington
 * WPF Section 01
 * Grade Letter Calculator
 * 8-19-2014
 */

// set the prompt to input a grade.
var grade = Number(prompt("Enter your grade", 90));
var letter;

// calculating the first range of grade
if (grade == 100 && grade >= 90) {
	letter = "A"
	alert("You have a " + grade + "%, which means you have earned a(n) " +  + "in the class!");
};
