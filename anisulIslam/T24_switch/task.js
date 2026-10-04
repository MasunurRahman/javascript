//check vowel or consonant using switch case
var letter = prompt("Enter a letter: ");

switch(letter.toLowerCase()){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}