//For loop - sum of first 10 natural numbers
for(var i=1; i<=3; i = i+1){
var m = parseInt(prompt("Enter the first number : "));
var n = parseInt(prompt("Enter the last number : "));
var sum = 0;
for(var x=m; x<=n; x = x+1){
    sum = sum + x;
}
 document.write(sum + "<br>");
}