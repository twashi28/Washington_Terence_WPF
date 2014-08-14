// Terence Washington, August 14, 2014, Slice of Pie part 2

// The number of slices
var pSlice = 8;

//the number of people at the party
var students = 30;

//The number of pizzas ordered
var pizzas = 9;

//The calculation of how many slices of pizza Sparky can have
var eaten =pizzas * pSlice % students;


//The result of the calculation
var result = "Sparky got " + eaten + " slices of pizza.";
// I am not getting the result I thought I would have which is 4. The answer comes out as 12.

//Print the result
console.log(result);
