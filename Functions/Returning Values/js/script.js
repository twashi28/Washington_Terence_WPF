/* Terence Washington
 * Returning Values
 */

  

// Calling the function
 // w = 30, h = 20
var total = calcArea(30, 20); // The value gets returned back into the invocation

//Sets up the function
function calcArea (w, h) {
	var area = w * h;
	return area; // gets the answer out of the function and displays outside of its scope
}
console.log(total);