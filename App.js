require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

// Swap the numbers
let a = 10;
let b = 20;
let c = 30;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a, b, c); // Should output swapped values of a and b
// This is how you can swap the numbers without using arithmetic operations in JavaScript

// Generate OTP
function generateOTP(number) {
  let OTP = "";
  for (let i = 0; i < number; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    OTP += randomNumber.toString();
  }
  return OTP;
}
console.log(generateOTP(4)); // Example OTP generation

// Array methods
const array = ["Virat Kohli", "Anushka kohli", "Vamika Kohli", "Akaay Kohli"];
console.table(array);
const sortedArray = array.sort();
const reversedArray = array.reverse();
console.log(reversedArray);
console.table(sortedArray);

const numberArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
numberArray.push(11); // Push new data into array
numberArray.pop(); // Remove last index
numberArray.shift(); // Remove first index
numberArray.unshift(0); // Add first index

console.log(numberArray);
const sortedNumberArray = numberArray.sort((a, b) => a - b);
console.log(sortedNumberArray);

const connectedArray = array.concat(numberArray);
console.table(connectedArray);

const length = "Virat Kohli";
const numberOfLetters = length.length;
console.log(numberOfLetters);

const arr = [1, 2, 3, 8, 9, 10];
const multipliedArr = arr.map((element) => element * 2);
console.log(multipliedArr);

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
    const people = {
        Yashraj: { name: "Yashraj", age: 22 },
        Raj: { name: "Raj", age: 19 },
        Virat: { name: "Virat", age: 36 },
        Kohli: { name: "Kohli", age: 16 },
        Anushka: { name: "Anushka", age: 36 }
    };

    // Filter adults
    const adults = Object.values(people).filter(person => person.age >= 0);
    
    const OTP = generateOTP(6);
    
    res.render("home", { OTP, adults });
});

app.listen(port, function () {
  console.log("Server is running on port", port);
});
