/* Terence Washington
 * WPF Section 01
 * Movie Ticket Price
 * 8-21-2014
 */

// Setting variables
var age = prompt("Enter your age \n Age:", 17);

//Re- prompt if age is empty
if (age === "" || age === "0") {
	//Re-prompt for name if empty
	age = prompt("Please enter your age");
}

var time = prompt("What time does the movie start? \n Start Time:", 7);

// Re-prompt if time is empty
if (time === "" || time === "0") {
	//Re-prompt for name if empty
	time = prompt("Please enter movie time");
}

var price;


//Set ternary statment
price = ((age >= 55 || age <= 10) || (time >= 3 && time <= 5)) ? 7 : 12;

//Alerts the result of discount price
	alert("The ticket price is $" + price);
	
	//Prints to the console of discount price
	console.log("The ticket price is $" + price);
	console.log("Age: " + age);
	console.log("Time: " + time);