/* Terence Washington
 * Functions vs Procedures
 */

  
//This is a  function
function calcArea (w, h) {
	var area = w * h;
	return area; // gets the answer out of the function and displays outside of its scope
}


//This is a Procedure
function calcArea(w, h){
	var area = w * h;
	console.log(area); // no return in procedures
}
