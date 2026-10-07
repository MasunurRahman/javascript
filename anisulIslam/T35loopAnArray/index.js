// Loop an array

var numbers = [];
for (var i = 0; i < 5; i++) {
    numbers[i] = parseInt(prompt(`Enter number ${i + 1}: `));
}
var sum = 0;
for (var i = 0; i < 5; i++) {
    console.log(`Number ${i + 1}: ${numbers[i]}`);
    sum += numbers[i];
}
console.log(`sum of 5 numbers: ${sum}`);