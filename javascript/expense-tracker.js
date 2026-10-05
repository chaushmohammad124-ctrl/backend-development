const expenses = [
    { title: "Food", amount: 250, category: "Food" },
    { title: "Petrol", amount: 500, category: "Travel" },
    { title: "Movie", amount: 300, category: "Entertainment" },
    { title: "Food", amount: 180, category: "Food" }
];

const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
}, 0);

const foodExpenses = expenses.filter(expense => {
    return expense.category === "Food";
});

const highestExpense = expenses.reduce((highest, expense) => {
    return expense.amount > highest.amount ? expense : highest;
});

console.log("Total:", total);
console.log("Food Expenses:", foodExpenses);
console.log("Highest Expense:", highestExpense);