// index.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the Math Game!");
console.log("Solve simple addition problems. Type 'exit' to quit.");

function askQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const answer = num1 + num2;

    rl.question(`What is ${num1} + ${num2}? `, (userInput) => {
        if (userInput.toLowerCase() === 'exit') {
            console.log("Thanks for playing!");
            rl.close();
        } else if (parseInt(userInput) === answer) {
            console.log("Correct!");
            askQuestion();
        } else {
            console.log("Incorrect. Try again!");
            askQuestion();
        }
    });
}

askQuestion();

