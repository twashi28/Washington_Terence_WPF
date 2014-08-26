/* Terence Washington
 * Arguments and Parameters
 */


function outptMsg () {
  console.log("Hello World");
  
}
// Calling the function
calcArea(30, 20);         // w = 30, h = 20

//Sets up the function
function calcArea (w, h) {
	var area = w * h;
  console.log(area);
}


function dogYears(age){ // parameters or vars
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.")
}
var age1 = 6;
dogYears(age1); //arguments or storage
dogYears(3);
