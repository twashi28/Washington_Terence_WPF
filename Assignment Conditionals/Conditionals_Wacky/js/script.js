/* Terence Washington
 * WPF Section 01
 * Conditional Wacky
 * 8-21-2014
 */

// Setting the array var to hold some items
var snack = ["chips", "brownie", "gummies", "pretzel"];
snack [0];
snack[1];
snack[2];
snack[3];

//Setting a prompt to collect info from the user
var uSnack = prompt ("What snack would you like to eat? \n chips, brownie, gummies, or pretzel");

if (uSnack === "") {
	uSnack = prompt("Please enter a snack");
}

var hMany = prompt ("How many do you want?");

if (hMany === "") {
	hMany = prompt("Please the amount you want");
}


