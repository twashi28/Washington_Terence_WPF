/* Terence Washington
 * WPF Section 01
 * Movie Ticket Price
 * 8-21-2014
 */

// Setting variables
var age = prompt("Enter your age \n Age:", 17);
var time = prompt("What time does the movie start? \n Start Time:", 7);
var price;

//If statments for calculation of discount prices
if ((age >= 55 || age <= 10) || (time >= 3 && time <= 5)){
	price = 7;
	alert("The ticket price is $" + price);
	console.log("The ticket price is $" + price);
	console.log("Age: " + age);
	console.log("Time: " + time);
}else {
	price = 12;
	alert("The ticket price is $" + price);
	console.log("The ticket price is $" + price);
	console.log("Age: " + age);
	console.log("Time: " + time);
}
