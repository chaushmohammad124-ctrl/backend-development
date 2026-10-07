console.log("A basic JavaScript login system built to practice authentication logic");
const users = [];

// Register a new user
function register(username, password) {
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return {
            success: false,
            message: "Username already exists."
        };
    }

    users.push({
        username,
        password
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
        return {
            success: false,
            message: "Incorrect password."
        };
    }

    return {
        success: true,
        message: `Welcome, ${username}!`
    };
}

// Register accounts
console.log("=== ACCOUNT REGISTRATION ===");

console.log(register("zaid", "12345"));
console.log(register("ahmed", "abc123"));

// Login attempts
console.log("\n=== LOGIN TEST ===");

console.log(login("zaid", "12345"));
console.log(login("zaid", "wrong"));
console.log(login("unknown", "12345"));

// Display safe account information
console.log("\n=== REGISTERED USERS ===");

users.forEach((user, index) => {
    console.log(`${index + 1}. ${user.username}`);
});