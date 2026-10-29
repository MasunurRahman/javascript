//Budget Tracker add function

        // function to get user input 
        function getUserInput(promtMessage, isNumber = false) {
            const userInput = prompt(promtMessage);
            return isNumber ? parseFloat(userInput) : userInput;
            
        }

        function getExpenses(expenseNumber) {
            const expenses = [];
            for(let i = 1; i <= expenseNumber; i++){
                let expenseValue = getUserInput(`Enter Expense ${i}: `, true);
                if (isNaN(expenseValue) || expenseValue < 0) {
                    console.log(`Invalid expense value in iteration ${i}. setting expense to 0 for this iteration.`);
                    expenseValue = 0;
                }
                expenses.push(expenseValue);
            }
            return expenses;
        }

        function calculateTotalExpenses(expenses) {
            let totalExpense = 0;
            for (let j = 0; j < expenses.length; j++) {
                totalExpense += expenses[j];
            }
            return totalExpense;
        }
        function calculateTax(income,taxRate)
        {
            return income * taxRate;
        }
        function calculateNetIncome(income,tax)
        {
            return income - tax;
        }
         function calculateBalance(netIncome,expense)
        {
            return netIncome - expense;;
        }
        function calculateSavings(remaining,savingPercentage)
        {
            return remaining * savingPercentage;
        }
        function getFinancialStatus(savings)
        {
            let finalStatus = '';
            if(savings >= 1000)
            finalStatus ='Excelent';
        else if(savings >= 500)
            finalStatus ='Good';
        else if(savings >= 100)
           finalStatus ='Needs Improvement';
        else 
            finalStatus ='Critical';

            return finalStatus;
        }
        function display(userName,income,expense,tax,netIncome,remaining,savings,finalStatus)
        {
            console.log("Personal Budget Tracker\n");
            console.log("User : " + userName + '\n');
            console.log("Total Income : $" + income +'\n');
            console.log("Total Expenses : $" + expense +'\n');
            console.log("Tax Deducted (10%) : $" + tax +'\n');
            console.log("Net Income After Tax : $" + netIncome +'\n');
            console.log("Remaining Balance : $" + remaining +'\n');
            console.log("Savings (20% of balance) : $" + savings +'\n');
            console.log(finalStatus);

            if(income < expense)
                console.log('Warning : You are spending more than your income'); 
            
        }

        // main function to run the budget tracker
        function runBudgetTracker() { 

        const userName = getUserInput("Enter user name : "); 
        const income = getUserInput("Enter Income : ", true);
        const expenseNumber = getUserInput("How many expenses you have?: ", true);

        // validate inputs to ensure they are numbers and not negative- isNaN checks if the value is not a number
        if (isNaN(income) || isNaN(expenseNumber) || income <= 0 || expenseNumber < 0) {
            console.log("Invalid income or expense number. Please enter positive numbers.");
            return; // exit the function if inputs are invalid
        }
        else {
            
            const expenses = getExpenses(expenseNumber); 
            const expense = calculateTotalExpenses(expenses);

            const tax = calculateTax(income, 0.1);
            const netIncome = calculateNetIncome(income,tax);
            const remaining = calculateBalance(netIncome,expense);
            const savings = calculateSavings(remaining, 0.2);
            const finalStatus = getFinancialStatus(savings);
            display(userName,income,expense,tax,netIncome,remaining,savings,finalStatus);

       
         }
    }
         
        runBudgetTracker();