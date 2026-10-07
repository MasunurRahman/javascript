// Array library methods
/*
//shift() method removes the first element from an array . shift()  is opposite of pop() method which removes the last element from an array. 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits); // ["Orange", "Apple", "Mango"]

//unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements. unshift() is opposite of push() method which adds a new element to an array (at the end).
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits); // ["Lemon", "Banana", "Orange", "Apple", "Mango"]


//splice() method adds and/or removes array elements.
//adding elements using splice() method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // adds "Lemon" and "Kiwi" at index 2 , removes 0 elements
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
//removing elements using splice() method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2); // removes 2 elements starting from index 2
console.log(fruits); // ["Banana", "Orange"]


//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);// returns values from index 1 to index 3 (not included) elements of fruits array
console.log(citrus); // ["Orange", "Lemon"]
*/

//sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
//fruits.reverse(); // reverses the order of the elements in an array
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]  

//number sort
var numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function(a, b) {
    return a - b;
});// sorts numbers in ascending order

/*var numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function(a, b) {
    return b - a;
});// sorts numbers in descending order
*/

console.log(numbers); // [1, 5, 10, 25, 40, 100]
