// IIFE (Immediately Invoked Function Expression)
(function display(message) {
    console.log(message);
})('Hello, World!');

// Function Expression
var display2 = function displayMessage(message) {
    console.log(message);
};
display2('Hello, World!'); 