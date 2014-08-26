/* Terence Washington
 * Anonymous Functions
 */

/* set the function as a variable
var functionName = function(){
	
}

functionName();
*/

var calcArea =function(w, h) { // Defining
	var area = w * h;
	return area; // gets the answer out of the function and displays outside of its scope
}
var a = calcArea(30, 20); // Invoking
console.log(a);