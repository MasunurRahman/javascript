// one dimensional array
// create a function called highestScore that takes an array of numbers as an argument and returns the highest number in the array. 
// Recieve a 1d array called scores 
// Return the highest score  

console.clear();        
function highestScore(scores) {
    var max = scores[0]; // Initialize max with the first element of the array
    for (var i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i]; // Update max if a higher score is found
        }
    }
    return max; // Return the highest score

}

var scores = [85, 92, 78, 90, 88];
var maxScore = highestScore(scores);
console.log(maxScore);