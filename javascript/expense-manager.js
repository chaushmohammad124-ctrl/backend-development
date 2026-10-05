const expenses = [
    { title: "Petrol", amount: 500, category: "Travel" },
    { title: "Lunch", amount: 200, category: "Food" },
    { title: "Movie", amount: 300, category: "Entertainment" },
    { title: "Petrol", amount: 400, category: "Travel" },
    { title: "Dinner", amount: 350, category: "Food" }
];

// Calculate total expenses
const totalExpenses = expenses.reduce((total, expense) => {
    return total + expense.amount;
}, 0);

// Calculate expenses by category
const categoryTotals = expenses.reduce((result, expense) => {
    if (!result[expense.category]) {
        result[expense.category] = 0;
    }

    result[expense.category] += expense.amount;

    return result;
}, {});

// Find the most expensive expense
const mostExpensive = expenses.reduce((highest, expense) => {
    return expense.amount > highest.amount ? expense : highest;
});

// Get expenses above ₹250
const expensiveItems = expenses.filter(expense => {
    return expense.amount > 250;
});

// Create a summary
const summary = {
    totalExpenses,
    categoryTotals,
    mostExpensive,
    expensiveItems
};

console.log("Expense Summary:");
console.log(summary);