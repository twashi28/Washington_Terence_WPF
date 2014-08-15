/*
 * Terence Washington
 * WPF Section 01
 * Expressions Industry
 * 8-14-2014
 */

// Inputing the lenght, width, and height of the warehouse building
var lenght = prompt("How long is the warehouse building? \n Enter lenght:");
var width = prompt("How wide is the warehouse building? \n Enter width:");
var height = prompt("How tall is the warehouse building? \n Enter height:");

// Print the inputs to the console
console.log(lenght);
console.log(width);
console.log(height);


//multiplies the input of the lenght, width, and height.
var volume = Number(lenght) * Number(width) * Number(height);

// Print the volume to the console
console.log(volume);

//set the result in a concatening string
var result = "The volume of the warehouse building is " + volume + " cubic feet.";

//alert the result back to the user
alert(result);
