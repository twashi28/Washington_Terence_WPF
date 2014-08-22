/* Terence Washington
 * WPF Section 01
 * Conditional Wacky
 * 8-21-2014
 */

// Setting the array var to hold some items
var snack = ["chips", "brownies", "gummies", "pretzels"];
snack [0];
snack[1];
snack[2];
snack[3];
snack[4] = "cake";

//Setting a prompt to collect info from the user
var uSnack = prompt ("What snack would you like to eat? \n chips, brownies, gummies, or pretzels");

// This validates the input form the user
if (uSnack === "") {
	uSnack = prompt("Please enter a snack");
}
//Setting a prompt to collect info from the user
var hMany = Number(prompt ("How many do you want?"));


// This validates the input form the user
if (hMany === "") {
	hMany = Number(prompt("Please the amount you want"));
}

// Increments the amount the user wants by the same number
hMany +=hMany;


// Set the print out from alert and console
alert("So you like " + uSnack + "? You can have " + hMany + " more and some " + snack[4] + ".");
