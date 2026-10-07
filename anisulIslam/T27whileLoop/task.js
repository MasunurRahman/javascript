// sum of numbers from 1 to 100 divided by 3 and 5
var i = 1;
var sum = 0;
while(i <= 100){
    if(i % 3 === 0 && i % 5 === 0){
        sum = sum + i;
    }
    i = i + 1;
}
console.log(sum);
