// Chapter 9 - 11

// First Question

var user_city = prompt("Enter Your City name");

if ("karachi" || "Karachi"){
    console.log("Welcome to city of lights");
} else {
    console.log("Welcome to the" + user_city);
}

// Second Question

var user_gender = prompt("Enter Your Gender");

if (user_gender === "Male" || user_gender === "male") {
    console.log("Good Morning Sir")
} else if (user_gender === "Female" || user_gender === "female") {
    console.log("Good Morning Ma'am")
} else {
    console.log("Please enter a gender")
}

// Third Question

var user_signal = prompt("Enter Traffic Signal").toLowerCase();

if (user_signal === "red") {
    alert("Must Stop");
} else if (user_signal === "yellow") {
    alert("Ready to move");
} else if (user_signal === "green") {
    alert("Move now");
} else {
    alert("Enter A Signal Please!");
}

// Fourth Question

var current_fuel = prompt("Enter The amount of fuel you have");
var unsufficient_fuel = 0.25;

if (current_fuel > unsufficient_fuel) {
    console.log("You have enough Fuel");
} else if (current_fuel < unsufficient_fuel) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("PLease enter amount of fuel");
}

// Fifth Question

// 1)

var a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
} //Alert Show

// 2)

var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
} // No Alert Show

// 3)

var c = 12;

if (c++ === 13){
  alert("condition 1 is true");
}

if (c === 13){
  alert("condition 2 is true");
}

if (++c < 14){
  alert("condition 3 is true");
}

if(c === 14){
  alert("condition 4 is true");
} //Alert Shown

// 4)

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
  alert("The cost equals");
} //Alert shown

// 5)

if (true){
  alert("True");
}

if (false){
  alert("False");
} //Alert shown

// 6)

if("car" < "cat"){
  alert("car is smaller than cat");
} //Alert shown

// Seventh Question

var secret_number = 7;
var user_number = +prompt("Enter A Number between 1 To 10");

if (user_number === secret_number) {
    console.log("Bingo! Correct answer");   
} else if (user_number == "8") {
    console.log("Close enough to the correct answer");
} else {
    console.log("Please Try Again!");
}

// Eighth Question

var user_number = Number(prompt("Enter A Number to check if its divisible by 3"));

if (user_number % 3 === 0) {
    alert(user_number + " can be Divisible by 3");
} else {
    alert(user_number + " cannot be Divisible by 3");
}

// Ninth Question

var user_input = +prompt("Enter a number to check if its even or odd");

if (user_input % 2 === 0 ) {
    console.log("The Number is Even");
} else {
    console.log("The Number is Odd");
}

// Tenth Question

var temperature = +prompt("Enter the temperature:");

if (temperature > 40) {
  console.log("It is too hot outside.");
} else if (temperature > 30) {
  console.log("The Weather today is Normal.");
} else if (temperature > 20) {
  console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
  console.log("OMG! Today’s weather is so Cool.");
} else {
  console.log("It's cold outside.");
}

// Eleventh Question

var num1 = +prompt("Enter Your First Number");
var num2 = +prompt("Enter Your Second Number");
var operation = prompt("Enter Your Operation You Want");
var Result;


if (operation === "+") {
    console.log(Result = num1 + num2);
} else if (operation === "-") {
    console.log(Result = num1 - num2);
} else if (operation === "/") {
    console.log(Result = num1 / num2); 
} else if (operation === "*") {
    console.log(Result = num1 * num2);
} else if (operation === "%") {
    console.log(Result = num1 % num2);
} else {
    console.log("Please Enter correct Operation Or Enter a number")
}


// Chapter 12 - 13

// First Question

var User_Prompt = prompt("Enter A Character");
var ascii = User_Prompt.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log("Its a Number");
} else if (ascii >= 65 && ascii <= 90) {
    console.log("Its a Uppercase letter");
} else if (ascii >= 97 && ascii <= 122) {
    console.log("Its A Lowercase letter");
} else {
    console.log("Its Something else, Please enter a letter or Number!");
}

// Second Question

var num1 = Number(prompt("Enter A Number"));
var num2 = Number(prompt("Enter A Second Number"));

if (num1 >  num2) {
    console.log("The Larger Number is: " + num1);
} else if (num1 < num2) {
    console.log("The larger Number is: " + num2);
} else {
    console.log("Both Number Are Equal");
}

// Third Question

var num = Number(prompt("Enter A Number"));

if (num > 0) {
    console.log("The Number is Positive");  
} else if (num < 0) {
    console.log("The Number is Negative");
} else{
    console.log("The Number is 0"); 
}

// Fourth Question

var user_character = prompt("Enter a character");
var ascii = user_character.charCodeAt(0);

if (ascii == 65 || ascii == 97) {
    console.log("Your Letter is A and Its a Vowel");
} else if (ascii == 69 || ascii == 101) {
    console.log("Your Letter is E and Its a Vowel");
} else if (ascii == 73 || ascii == 105) {
    console.log("Your Letter is I and Its a Vowel");
} else if (ascii == 79 || ascii == 111) {
    console.log("Your Letter is O and Its a Vowel");
} else if (ascii == 85 || ascii == 117) {
    console.log("Your Letter is U and Its a Vowel");
} else {
    console.log("The Character is not a Vowel");
}

// Fifth Question


var Correct_pass = "admin123";
var user_pass = prompt("Enter A Password");

if (user_pass === Correct_pass) {
    console.log("Correct! The password you entered matches the original password.")
} else if (!user_pass) {
    console.log("Please enter your password");
} else {
    console.log("Incorrect password");
}

// Sixth Question

var time = +prompt("Enter time in 24-hour format (e.g., 1900):");

if (time >= 0000 && time < 1200) {
  console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
  console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  console.log("Good night!");
} else {
  console.log("Invalid time entered!");
}