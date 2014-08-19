/* Terence Washington
 * Else if
 */

var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45; // height of the kid with the parent.

// If the child is over 48 in height

if(kidHeight > minHeight){
	// code performed if kid can ride
	console.log("You can ride the coaster.");
}else if (kidHeight > wParentHeight){
	// code performed if kid has parent present
	console.log("You can ride but only with a parent present.");
}else{
	//You can not ride
	console.log("You are too short for this ride.");
}
