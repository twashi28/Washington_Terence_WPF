/* Terence Washington
 * WPF Section 01
 * Circumference and Stung!
 * 8-26-2014
 */


var cirCumf = function (r, pi) {      //Set a variable as a function with a parameter inside
  var cumf = (2 * r) * pi;         //Setting a variable for the calculation of circumference
  return cumf;                  // Returning the calculated answer out of the function
}
var answer = cirCumf(2, 3.14);       //Setting a variable to call the function with arguments, Result variable
console.log("The circumference of the circle is " + answer + ".");           //Printing the answer to the console
