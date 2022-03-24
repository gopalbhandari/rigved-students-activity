// Importing
let fs = require('fs');
let read = require("readline-sync");

// Taking user input
let id = read.questionInt("Enter Your ID: ");
let name = read.question("Enter your name: ");
let salary = read.questionInt("Enter your salary: ");
// Making an array
let user = [id,name,salary];

// console.log(user);

// Converting
let jsonString = JSON.stringify(user);

// Writing to the file
fs.writeFileSync('users.json', jsonString.concat(",\n"), {flag: 'a+'});
console.log("Added to the file");