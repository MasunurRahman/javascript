//fizz buzz challenge - divided by 3 print fizz, divided by 5 print buzz, divided by both print fizzbuzz, otherwise print the number


for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) //if(i % 15 === 0)
    {
        console.log("fizzbuzz");
    } 
    else if(i % 3 === 0) {
        console.log(`fizz\n`);
    } 
    else if(i % 5 === 0) {
        console.log(`buzz\n`);
    }
     else {
        console.log(`${i}\n`);
    }
}