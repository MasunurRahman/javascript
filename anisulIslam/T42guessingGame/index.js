//Guessing Game
//Guess a number between 1 and 5
//Generate a random number between 1 and 5
//if the guess number matches the random number, then show message won else lost 
// run the game for five times 
// show the number of wons and losts 

var wins = 0;
var losses = 0;
for (var i = 0; i < 5; i++) {
var guessNumber = parseInt(prompt("Guess a number between 1 and 5:"));
var randomNumber = Math.floor(Math.random() * 5) + 1;
if (guessNumber === randomNumber) {
    console.log("You won!");
    wins++;
}
 else {
    console.log("You lost! The correct number was " + randomNumber);
    losses++;
}
} 
document.write("You Won: " + wins + " times <br>");
document.write("You Lost: " + losses + " times");