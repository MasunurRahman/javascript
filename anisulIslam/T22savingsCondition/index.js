//Savings Condition
        const userName = prompt("Enter user name : ");
        const income = parseFloat(prompt("Enter Income : "));
        const expense = parseFloat(prompt("Enter expense : "));

        const tax = (income * 10) / 100;
        const netIncome = income - tax;
        const remaining = netIncome - expense;
        const savings = (remaining * 20) / 100;

        console.log("Personal Budget Tracker\n");
        console.log("User : " + userName + '\n');
        console.log("Total Income : $" + income +'\n');
        console.log("Total Expenses : $" + expense +'\n');
        console.log("Tax Deducted (10%) : $" + tax +'\n');
        console.log("Net Income After Tax : $" + netIncome +'\n');
        console.log("Remaining Balance : $" + remaining +'\n');
        console.log("Savings (20% of balance) : $" + savings +'\n');


        if(savings >= 1000)
            console.log('Excelent');
        else if(savings >= 500)
            console.log('Good');
        else if(savings >= 100)
            console.log('Needs Improvement');
        else 
            console.log('Critical');

        if(income < expense)
            console.log('Warning : You are spending more than your income');
