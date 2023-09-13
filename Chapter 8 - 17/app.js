// 1st question --------------------------------------------------------------------------------
// var name = prompt("Enter your name: ");
// alert("Hi " + name);

// 2nd question --------------------------------------------------------------------------------
// var number = +prompt("Enter a number for multiplication: ");
// if(number == " "){
//     for(var i = 1; i <= 10; i++){

//         result = i * 5;
//         document.write("5 X "+ i + " " + "= " + result, "<br>");
//     }
// } else {
//     for(var i = 1; i <= 10; i++){
//         result = i * number;
//         document.write(number + " X "+ i + " " + "= " + result, "<br>");
//     }
// }


// 3rd question --------------------------------------------------------------------------------
// var city = prompt("Ente city name: ");
// if(city == "karachi") {
//     alert("Welcome to the city of lights.");
// } else {
//     alert("Welcome to " + city);
// };


// 4th question --------------------------------------------------------------------------------

// var gender = prompt("Enter your gender: ");
// if(gender == "male"){
//     alert("Welcome Sir!");
// } else if (gender == "female") {
//     alert("Welcome Ma'am!");
// } else { 
//     alert("Welcome!");
// };


// 5th question --------------------------------------------------------------------------------

// var roadSignal =  prompt("Enter road signal: ");
// if(roadSignal == "red"){
//     alert("Vehicles must stop!");
// } else if (roadSignal == "yellow") {
//     alert("Vehicles should get ready to move!");
// } else if (roadSignal == "green") {
//     alert("Vehicles can move now!");
// } else {
//     alert("Wrong road traffic signal!");
// };


// 6th question --------------------------------------------------------------------------------

// var currAge = prompt("Enter your current age: ");
// var maxAge = prompt("Enter your maximum age: ");
// if (currAge <= maxAge){
//     alert("“You are welcome!")
// } else {
//     alert("You are not allowed!")
// }


// 7th question --------------------------------------------------------------------------------

// var fuel = prompt("Enter remaining fuel: (In liters)");
// if (fuel < 0.25) {
//     alert("“Please refill the fuel in your car!");
// } else {
//     alert("“You don't need to refill the fuel in your car!");
// };


// 8th question --------------------------------------------------------------------------------

// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }
// alert displays

// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// };
// alert not displays 


// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// alert not displays
// if (c === 13){
//  alert("condition 2 is true");
// }
// alert displays

// if (++c < 14){
//  alert("condition 3 is true");
// }
// alert not displays
// if(c === 14){
//  alert("condition 4 is true");
// }
// alert displays

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// };
// alert displays

// if (true){
//     alert("True");
// }
// alert displays
// if (false){
//     alert("False");
// }
// alert not displays

// if("car" < "cat"){
//     alert("car is smaller than cat");
// };
// alert displays

// 9th question --------------------------------------------------------------------------------

// var sub1 = +prompt("Enter marks of 1st subject: ");
// var sub2 = +prompt("Enter marks of 2nd subject: ");
// var sub3 = +prompt("Enter marks of 3rd subject: ");
// var totalMarks = 300;
// var Remarks;
// var Grade;

// var percentage = (sub1 + sub2 + sub3) / 300 * 100;

// var obtMarks = document.getElementById("obtMarks");
// var per = document.getElementById("per")
// var grade = document.getElementById("grade")
// var remarks = document.getElementById("remarks");


// if (percentage >= 80 && percentage <=100){
//     Grade = "A-one";
//     Remarks = "Excellent";
// } else if (percentage >= 70 && percentage <= 80) {
//     Grade = "A";
//     Remarks = "Good";
// } else if (percentage >= 60 && percentage <= 70) {
//     Grade = "B";
//     Remarks = "You need to improve";
// } else if (percentage >= 0 && percentage <= 60) {
//     Grade = "Fail";
//     Remarks = "Sorry";
// } else {
//     Grade = "Record not found.";
//     Remarks = "Record not found.";
// }

// obtMarks.innerHTML = (sub1 + sub2 + sub3);
// per.innerHTML =  percentage;
// grade.innerHTML = Grade;
// remarks.innerHTML = Remarks;


// 12 - 13 chapter -------------------------------------------- 


// 1st question --------------------------------------------- 

// var numb = prompt("Enter a number to check weather it is divisible by 3 or not: ");
// if (numb % 3 == 0) {
//     alert(numb + " is divisible by 3.");
// } else {
//     alert(numb + " is not divisible by 3.");
// }


// 2nd question ----------------------------------------

// var numb = prompt("Enter a number to check weather it is even or odd: ");
// if (numb % 2 == 0) {
//     alert(numb + " is even.");
// } else {
//     alert(numb + " is odd.");
// }


// 3rd question ---------------------------------------------------

// var age = prompt("Write you age: ");
// if (age > 18) {
//     alert("Old enough.");
// } else {
//     alert("Too young.");
// }


// 4th question --------------------------------

// var name = prompt("Enter you name: ");
// if (name == "huzaifa"){
//     alert("Welcome my friend.");
// };


// 5th question ---------------------------------------------

// var num = prompt("Enter a number to check weather it is divisible by 3 or not: ");
// var remainder = num % 3;
// switch (remainder){
//     case 0:
//         alert(num + " is divisible by 3.");
//         break
//     default:
//         alert(num + " is not divisible by 3.");
//         break
// }


// 6th question ---------------------------------------------

// var inp = prompt("Enter a character to check weather first character it is a number or character: ");
// var inpCode = inp.charCodeAt(0);
// if (inpCode >= 48 && inpCode <= 57) {
//     alert(inp.charAt(0) + " is a number.");
// } else if (inpCode >= 65 && inpCode <= 90) {
//     alert(inp.charAt(0) + " is an uppercase character.");
// } else if (inpCode >= 97 && inpCode <= 122) {
//     alert(inp.charAt(0) + " is a lowercase character.");
// } else {
//     alert(inp.charAt(0) + " is a neither a number nor a character.");
// };


// 7th question ----------------------------------------------------------------

// var num1 = +prompt("Ente 1st number: ");
// var operator = prompt("Enter operator: (+, -, *, /, %)");
// var num2 = +prompt("Enter 2nd number: ");
// var res;

// switch (operator){
//     case "+":
//         res = num1 + num2;
//         alert(num1 + " + " + num2 + " = " + res);
//         break
//     case "-":
//         res = num1 - num2;
//         alert(num1 + " - " + num2 + " = " + res);
//         break
//     case "*":
//         res = num1 * num2;
//         alert(num1 + " * " + num2 + " = " + res);
//         break
//     case "/":
//         res = num1 / num2;
//         alert(num1 + " / " + num2 + " = " + res);
//         break
//     case "%":
//         res = num1 % num2;
//         alert(num1 + " % " + num2 + " = " + res);
//         break
//     default:
//         alert("Invalid operator.");
//         break
// }


// 11th question ---------------------------------------------------

// var firstName = "Ali";
// if (firstName === "Fahad") {
//     alert("Hello Fahad!");
// } else {
//     alert("You are not Fahad.");
// };


// 12th question -----------------------------------------------------

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else {
//     greeting = "Good evening";
//     alert(greeting);
// };


// 13th question ---------------------------------------------------------

// var num1 = prompt("Enter 1st number: ");
// var num2 = prompt("Enter 2nd number: ");
// if (num1 > num2) {
//     alert(num1 + " is greater than " + num2 + " .");
// } else if (num1 == num2) {
//     alert(num1 + " and " + num2 + " are equal.");
// } else {
//     alert(num2 + " is greater than " + num1 + " .");
// };


// 14th quesiton ----------------------------------------------------------

// var num = prompt("Enter a number to check wheater a number is positive, negative or zero");
// if (num > 0) {
//     alert(num + " is positive.");
// } else if (num == 0) {
//     alert(num + " is zero");
// } else {
//     alert(num + " is negative.");
// };


// 20th question ----------------------------------------------------------

// var age = prompt("Enter your age: ");
// var res = age > 18 ? "Old enought." : "Too young.";
// alert(res);


// 14 - 17 chapters --------------------------------------------------------

// 1st, 2nd question -------------------------------------------------------

// var stuNames = [];


// 3rd question ------------------------------------------------------------

// var strArr = ["Huzaifa", "zain", "usama", "zakir"];


// 4th question ------------------------------------------------------------

// var numArr = [1,2,3,4,5,6,7,8,9];


// 5th question ------------------------------------------------------------

// var boolArr = [true, false, true, true, false, false]; 


// 6th question ------------------------------------------------------------

// var mixArr = ["huzaifa", 12, true];


// 7th question ------------------------------------------------------------

// var networks = ["jazz", "telenor", "ufone", "warid", "zong"];


// 8th question ------------------------------------------------------------

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS","M. Phil.", "PhD"];
// for (var i = 0; i<qualifications.length; i++) {
//     document.write(i+1 +") " + qualifications[i], "<br>");
// }


// 9th question ------------------------------------------------------------

// var bestMovies = [];
// bestMovies[0] = "BatMan: The Begining";
// bestMovies[1] = "BatMan: Dark Knight";
// bestMovies[2] = "BatMan: Dark Knight Rises";
// bestMovies[3] = "Tenet";
// bestMovies[4] = "Dhoom 3";

// document.write("Best Movies of All Time", "<br>");
// for(var i = 0; i< bestMovies.length; i++) {
//     document.write(i+1 +") " + bestMovies[i], "<br>");
// }
// document.write("Length of Array: " + bestMovies.length)


// 10th question -----------------------------------------------------------

// var cars = ["Audi", "Toyota", "Honda", "Lamborghini"];
// document.write("First index of the array: 0","<br>");
// document.write("Car at first index of the array: " + cars[0], "<br>");
// document.write("Last index of the array: " + (cars.length - 1), "<br>");
// document.write("Car at last index of the array: " + cars[cars.length - 1]);


// 13th question -----------------------------------------------------------

// var numbers = [25, 58, 68, 45, 21, 36, 20, 18, 5];
// document.write("Scores of students: " + numbers, "<br>");
// document.write("Ordered scores of students: " + numbers.sort());


// 14th question -----------------------------------------------------------

// var fruits = ["strawberry", "apple", "orange", "banana"];
// document.write("Fruits List: ", "<br>");
// document.write(fruits, "<br>");
// document.write("Ordered Fruit List: ", "<br>");
// document.write(fruits.sort());


// 15th question -----------------------------------------------------------

// var cities = ["Karachi", "Peshawar", "Islamabad", "Quetta", "Lahore", "Sialkot"];
// var selectedCities = cities.slice(0, 3);
// document.write("Cities List: " + cities, "<br>");
// document.write("Selected Cities: " + selectedCities)


// 16th question -----------------------------------------------------------

// var arr = ["This ", " is ", " my ", " cat."];
// document.write("Array:", "<br>", arr, "<br>", "String: ", "<br>",  arr.join(" "))


// 19th question -----------------------------------------------------------

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select id='selectedManufacturer'>");

// for(var i = 0; i < manufacturers.length; i++) {
//     document.write("<option value='" + manufacturers[i]+ "'>" + manufacturers[i] + "</option>");
// };

// document.write("</select>")


// 20th question -----------------------------------------------------------

// var multiArr = [[]];


// 21th question -----------------------------------------------------------

// var matrix = [
//     [1, 2, 3, 0],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]
// for(var i = 0; i < matrix.length; i++){
//     document.write(matrix[i], "<br>")
// }