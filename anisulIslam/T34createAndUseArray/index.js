// create an array

//var names = new Array(5); // creates an array of length 5
//var names = [];
/*names[0] = "Alice";
names[1] = "Bob";
names[2] = "Charlie";
names[3] = "David";
names[4] = "Eve";*/

var names1 = ["Alice", "Bob", "Charlie", "David", "Eve"];
names1.push("Frank"); // adds "Frank" to the end of the array
names1.pop(); // removes the last element from the array
names1.pop(); // removes the last element from the array
console.log(names1.length); // Output: 4
console.log(names1); // Output: ["Alice", "Bob", "Charlie", "David"]

//concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
var names2 = ["pranto", "anisul", "islam", "tuhin"];

var names = names1.concat(names2); // combines names1 and names2 into a new array
console.log(names); // Output: ["Alice", "Bob", "Charlie", "David", "pranto", "anisul", "islam", "tuhin"]
