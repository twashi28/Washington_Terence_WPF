/* Terence Washington
 * Variable Scope
 */

function outptMsg () {
  console.log("Hello World");
  
}

var width = 5; // this var is scoped to the entire document

//Sets up the function
function calcArea () {
	var width = 20; //the output is used because this variable is within the function, scoped to the function
	var height = 30;
	var area = width * height;
  console.log(area);
}

// Calling the function
calcArea(); //using the vars and calcs inside the named function
calcArea();
calcArea();

console.log(width); // using the var that is outside with the matching scope distance
