/* Terence Washington
 * WPF Section 01
 * Celsius to Fahrenheit converter
 * 8-19-2014
 */


// Setting the variables and prompts
var degree = prompt ("What degree would you like to convert to \n C or F:");
var temp = prompt ("What is the temperature to convert? \n Enter Temperature:");
var cel;
var far;

//If the degree is "c", then do the celsius calculation to alert and print the conversion
if (degree == "c") {
	cel =  (temp - 32) * 5/9;
	console.log(cel);
	alert("The temperature is " + cel + " degrees celsius.");
	
//If the degree is "f", then do the fahrenheit calculation to alert and print the conversion
}if ( degree =="f"){
	far = temp * 9/5 + 32;
	console.log(far);
	alert("The temperature is " + far + " degrees fahrenheit.");
}