// date objects and methods

var date = new Date(); // creating a new date object
console.log(date); // printing the current date and time

// getting the current year, month, and date
var year = date.getFullYear();
var month1 = date.getMonth(); // returns month from 0 to 11
var month = date.getMonth() + 1; // returns month from 1 to 12
var currentDate = date.getDate();
var day = date.getDay(); // returns day of the week from 0 to 6 (0 is Sunday, 1 is Monday, etc.)
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

console.log("Current Year: " + year);
console.log("Current Month: " + month1);
console.log("Current Month: " + month);
console.log("Current Day: " + currentDate);
console.log("Current Day of the Week: " + day);
console.log("Current Hours: " + hours);
console.log("Current Minutes: " + minutes);
console.log("Current Seconds: " + seconds);