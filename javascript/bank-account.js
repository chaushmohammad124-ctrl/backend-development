const account = {
    owner: "chaush",
    balance: 10000,
    transactions: []
};

function deposit(amount) {
    if (amount <= 0) {
        return "Invalid deposit amount";
    }

    account.balance += amount;

    account.transactions.push({
        type: "deposit",
        amount: amount
    });

    return `₹${amount} deposited successfully`;
}

function withdraw(amount) {
    if (amount <= 0) {
        return "Invalid withdrawal amount";
    }

    if (amount > account.balance) {
        return "Insufficient balance";
    }

    account.balance -= amount;

    account.transactions.push({
        type: "withdraw",
        amount: amount
    });

    return `₹${amount} withdrawn successfully`;
}

function getAccountSummary() {
    return {
        owner: account.owner,
        balance: account.balance,
        transactions: account.transactions
    };
}

console.log(deposit(2000));
console.log(withdraw(3500));
console.log(withdraw(20000));

console.log(getAccountSummary());