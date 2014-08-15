/*
 * Terence Washington
 * WPF Section 01
 * Expressions Personal
 * 8-14-2014
 */

// Inputing the hours of each day that have been played
var monday = prompt("How many hours have I played Tetris for monday? \n Enter Hours:");
var tuesday = prompt("How many hours have I played Tetris for tuesday? \n Enter Hours:");
var wedsnesday = prompt("How many hours have I played Tetris for wedsnesday? \n Enter Hours:");
var thursday = prompt("How many hours have I played Tetris for thursday? \n Enter Hours:");
var friday = prompt("How many hours have I played Tetris for friday? \n Enter Hours:");

//adds the hours of the week together
var sum = Number(monday) + Number(tuesday) + Number(wedsnesday) + Number(thursday) + Number(friday);
console.log(sum);

//Find the average of the hours played for the week.
var average = (sum)/5;

//output the average of the week
console.log(average);
var result = "The average hours I have played tetris is " + average + " hrs.";
alert(result);
