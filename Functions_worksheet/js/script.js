/* Terence Washington
 * WPF Section 01
 * Circumference and Stung!
 * 8-26-2014
 */


var cirCumf = function (r) {      //Set a variable as a function with a parameter inside
	var p = 3.14;               //Setting a variable for pi 3.14
  var cumf = (2 * r) * p;         //Setting a variable for the calculation of circumference
  return cumf;                  // Returning the calculated answer out of the function
}
var answer = cirCumf(4);       //Setting a variable to call the function with arguments
console.log(answer);           //Printing the answer to the console
