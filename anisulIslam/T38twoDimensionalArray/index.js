// two dimensional array
// create a function called highestRunScorer that takes an array of name and numbers as an argument and returns the name of the highest number in the array. 
// Recieve a 2d array called playersInfo
// Based on highest score, return the name of the player    

console.clear();         
function highestRunScorer(playersInfo) {  
    var max = playersInfo[0][1]; // Initialize max with the first element of the array
    for (var i = 1; i < playersInfo.length; i++) { 
        if (playersInfo[i][1] > max) {
            var highestScorer = playersInfo[i][0];
            var max = playersInfo[i][1]; // Update max if a higher score is found
        }   
    }
    return highestScorer; // Return the highest scorer name

} 

var playersInfo = [["Alice", 85], ["Bob", 92], ["Charlie", 78], ["David", 78], ["Eve", 99]]; // Example 2D array of players and their scores
var highestScorerName = highestRunScorer(playersInfo); 
console.log(highestScorerName);  