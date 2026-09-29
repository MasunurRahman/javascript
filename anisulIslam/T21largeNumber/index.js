//Finding Large Number among 3 numbers

var num1 = prompt('Enter first numnber');
var num2 = prompt('Enter second numnber');
var num3 = prompt('Enter third numnber');

if(num1 > num2 && num1 > num3)
    console.log('Large number : ' + num1);
else if(num2 > num1 && num2 > num3)
    console.log('Large number : ' + num2);
else
    console.log('Large number : ' + num3);
