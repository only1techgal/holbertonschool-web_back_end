const readline = require('readline');

// Creates an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Displays the welcome message and prompt for the user's name
console.log("Welcome to Holberton School, what is your name?");

// Reads input from the user
rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    rl.close(); // Closes the input stream after receiving input
});

// Displays the closing message when the interface is closed
rl.on('close', () => {
    console.log("This important software is now closing");
});
