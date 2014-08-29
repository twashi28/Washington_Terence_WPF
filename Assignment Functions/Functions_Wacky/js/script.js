/* Terence Washington
 * WPF Section 01
 * Function Wacky
 * 8-28-2014
 */

//  Setting prompts as variables
var ram = prompt("Place a number in here.");

if (ram === "") {
	ram = Number(prompt("Please enter a number to start"));
}
var sic = prompt("Place another number please.");

if (sic === "") {
	sic = Number(prompt("Please enter another to begin"));
}
var per = prompt("Place a third digit here.");

if (per === "") {
	per = Number(prompt("Please enter one more number"));
}



//Set a ternary statement for the second prompt value
var wackOut = ( sic > 20) ? "Not Wacky Enough" : "Too Wacky.";
	console.log(wackOut);

//A function with three parameters for the calculations
var calcWacky = function(r, s, p){
	var wack = r * s - p *p /r + s;
	return wack; // Returns the result
}

// setting a result variable to print out through the console
var answer = calcWacky(ram, sic, per);
console.log("This wacky calculation came to about " + answer + ". Makes sense...");