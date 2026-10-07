//Function

// creating a function
function square(num1, num2) {
    result = num1 * num2;
    return result;
}

//addition function
function addition(num1, num2) {
    result = num1 + num2;
    return result;
}

//subtraction function
function subtraction(num1, num2) {
    result = num1 - num2;
    return result;
}

// calling a function
var x = square(5, 7);
document.write('square of two number is: ' + x + '<br>');
var y = addition(5, 7);
document.write('addition of two number is: ' + y + '<br>');
var z = subtraction(7, 5);
document.write('subtraction of two number is: ' + z + '<br>');