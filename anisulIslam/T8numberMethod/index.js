var num = "20";
num = parseInt(num); // kuno int number jodi string e thake tahole string ke int number e convert korar jonno, ekhane number er sathe onno character thakle ba point er por songkha thakle segulo bad diye dey, sudhu int return kore, onno character diye suru hole kaj korena , nan dekhay, parseInt("1010", 2);   // output 10 (binary "1010" ke decimel e rupantor kore )
//num = parseFloat(num); // kuno float number jodi string e thake tahole string ke float number e convert korar jonno, ekhane number er sathe onno character thakle segulo bad diye dey, sudhu int/floating number return kore ,,  onno character diye suru hole kaj korena , nan dekhay,
//num = toString(num); // kuno number ke string e convert korar jonno

console.log(typeof(num)); //datatype ber korar jonno ei typeof() function ta use kora hoy

var number = 32.4678;
console.log(number.toFixed(2)); // toFixed() function e joto songkha deoa hobe point er por totoi dekhabe,toFixed() faka rakhle point er ager songkha gulo dekhabe, output value string e return korbe

var number = 32.4678;
console.log(number.toPrecision()); // toPrecision() function e joto songkha deoa hobe totogulo songkha dekhabe, jemon toPrecision(3) dile total 3 ta dekhabe 32.5 , output value string e return korbe

//Number method - kuno number jodi string e thake tahole string ke number e convert korar jonno, ekhane number er sathe onno character thakle kaj korena, nan dekhay, boolean true er jonno 1 & false er jonno 0 dekhay 
var nums = "14.5";
//console.log(Number(nums));
nums = Number(nums);
console.log(nums);