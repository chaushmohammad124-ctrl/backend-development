console.log("A basic JavaScript login system built to practice authentication logic");

const users = [];

// Register a new user
function register(username, password) {

    if (username.length < 3) {
        return {
            success: false,
            message: "Username must be at least 3 characters."
        };
    }

    if (password.length < 6) {
        return {
            success: false,
            message: "Password must be at least 6 characters."
        };
    }

    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return {
            success: false,
            message: "Username already exists."
        };
    }

    users.push({
        username,
        password,
        failedAttempts: 0
    });

    return {
        success: true,
        message: "Account created successfully."
    };
}

// Login user
function login(username, password) {

    const user = users.find(user => user.username === username);

    if (!user) {
        return {
            success: false,
            message: "Username not found."
        };
    }

    if (user.password !== password) {

        user.failedAttempts++;

        return {
            success: false,
            message: `Incorrect password. Failed attempts: ${user.failedAttempts}`
        };
    }

    user.failedAttempts = 0;

    return {
        success: true,
        message: `Welcome, ${username}!`
    };
}

// Register accounts
console.log("\n=== ACCOUNT REGISTRATION ===");

console.log(register("zaid", "123456"));
console.log(register("ahmed", "abc123"));

// Login tests
console.log("\n=== LOGIN TEST ===");

console.log(login("zaid", "wrong"));
console.log(login("zaid", "wrong"));
console.log(login("zaid", "123456"));

console.log(login("unknown", "123456"));

// Display safe account information
console.log("\n=== REGISTERED USERS ===");

users.forEach((user, index) => {
    console.log(
        `${index + 1}. ${user.username} | Failed attempts: ${user.failedAttempts}`
    );
});