require('dotenv').config();

const express = require("express");
const app = express()

//swap the number
let a = 10;
let b = 20;
let c = 30;

a = a^b;
b = a^b;
c = a^b;

console.log(a,b,c);
//so this how you can swap the number without using airthmatic oerations in JavaScripts 


//Generate OTP
function genrateOTP(number) {
    let OTP = "";
    for(let i = 0; i < number; i++) {
        let randomnumber = Math.floor(Math.random()*10);
        OTP = OTP + randomnumber.toString();
    }
    return OTP;
}
console.log(genrateOTP(4));


// Array Method
const array = ["Virat Kohli", "Anushka kohli", "Vamika Kohli", "Akaay Kohli"];
console.table(array);
const sort =  array.sort();
const rev = array.reverse();
console.log(rev);
console.table(sort);


const NumberArray = [10,9,8,7,6,5,4,3,2,1];
NumberArray.push(11); // To push new data into array
NumberArray.pop(); // To remove last index
NumberArray.shift(); // To remove first index
NumberArray.unshift(0); // To add first index

console.log(NumberArray);
const sortNumber = NumberArray.sort((a,b)=> a-b);
console.log(sortNumber);

const connectTwoArray = array.concat(NumberArray);
console.table(connectTwoArray);

const length = "Virat Kohli";
const numberOfLetters = length.length;
console.log(numberOfLetters);


const people = [
    { name: 'Yashraj', age: 22 },
    { name: 'Raj', age: 19 },
    { name: 'Virat', age: 36 },
    { name: 'Kohli', age: 16 },
    { name: 'Anushka', age: 36 }
  ];
  
  const isAdult = (person) => person.age >= 18;
  const adults = people.filter(isAdult);
  console.log(adults);



  const arr = [1,2,3,8,9,10];
  const multipliedArr = arr.map(element => element * 2);
  console.log(multipliedArr); 


  const port = process.env.PORT || 3000;

  app.get("/", function(req, res) {
    res.send("Hello World");
});


app.listen(port, function() {
    console.log("Server is running on port", port);
});