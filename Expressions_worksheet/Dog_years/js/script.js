// Terence Washington, August 14, 2014, Dog Years

// The user can input the human years of the dog here
var humanAge = prompt("How old is Sparky in human years? \n Age:");

//The human age is calculated
var dogAge = humanAge * 7;

// This shows the result after the calculation
var result = "Sparky is " + humanAge + " human years old which is " + dogAge + " in dog years.";
alert(result);

// Print the dog's age
console.log(result);
console.log(dogAge);