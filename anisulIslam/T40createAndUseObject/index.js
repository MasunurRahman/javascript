// Create and Use Objects in JavaScript
// create a constructor function to create objects



// Create an object
/*var student1 = {
    name : "pranto",
    age : 32,
    cgpa : 3.10,
    lang : ['bangla', 'english', 'hindi']
}

console.log(student.cgpa); 
*/

// creating a constructor function
function Student(name, age, cgpa, lang){ // function name is capitalized to indicate that it is a constructor function
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
    this.display = function(){ // method to display the object properties
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("CGPA: " + this.cgpa);
        console.log("Languages: " + this.lang);
    }
}

// creating an object using the constructor function
var student1 = new Student("pranto", 32, 3.10, ['bangla', 'english', 'hindi']);
var student2 = new Student("anisul", 30, 3.50, ['bangla', 'english', 'arabic']);
var student3 = new Student("sabbir", 28, 3.80, ['bangla', 'english', 'french']);
 
console.log(student1.name);
console.log(student2.name);
console.log(student3.name);

student1.display(); // calling the display method of the student1 object
student2.display();
student3.display();