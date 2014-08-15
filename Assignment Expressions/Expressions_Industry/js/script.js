/*
 * Terence Washington
 * WPF Section 01
 * Expressions Industry
 * 8-14-2014
 */

// Inputing the lenght, width, and height of the warehouse building
var lenght = prompt("How many hours have I played Tetris for monday? \n Enter Hours:");
var width = prompt("How many hours have I played Tetris for tuesday? \n Enter Hours:");
var height = prompt("How many hours have I played Tetris for wedsnesday? \n Enter Hours:");


//multiplies the input of the lenght, width, and height.
var volume = Number(lenght) * Number(width) * Number(height);

// Print the volume to the console
console.log(volume);

//set the result in a concatening string
var result = "The volume of the warehouse building is " + volume + " cubic feet.";

//alert the result back to the user
alert(result);
