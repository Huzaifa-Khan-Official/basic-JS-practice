// ************* Question : 1 *****************

// let num = prompt("Enter a positive number");
// let roundoffValue = Math.round(num);
// let floorValue = Math.floor(num);
// let ceilValue = Math.ceil(num)
// console.log(num, roundoffValue, floorValue, ceilValue);

// document.write(`
// <p>Number: ${num}</p>
// <p>Round Off Value: ${roundoffValue}</p>
// <p>Floor Value: ${floorValue}</p>
// <p>Ceil Value: ${ceilValue}</p>
// `)


// ************* Question : 2 *****************

// let num = prompt("Enter a Negative number:");
// let roundoffValue = Math.round(num);
// let floorValue = Math.floor(num);
// let ceilValue = Math.ceil(num)
// console.log(num, roundoffValue, floorValue, ceilValue);

// document.write(`
// <p>Number: ${num}</p>
// <p>Round Off Value: ${roundoffValue}</p>
// <p>Floor Value: ${floorValue}</p>
// <p>Ceil Value: ${ceilValue}</p>
// `);


// ************* Question : 3 *****************

// let num = prompt("Enter a Positive Floating number:");
// let roundoffValue = Math.round(num);
// let floorValue = Math.floor(num);
// let ceilValue = Math.ceil(num)
// console.log(num, roundoffValue, floorValue, ceilValue);

// document.write(`
// <p>Number: ${num}</p>
// <p>Round Off Value: ${roundoffValue}</p>
// <p>Floor Value: ${floorValue}</p>
// <p>Ceil Value: ${ceilValue}</p>
// `);


// ************* Question : 4 *****************

// let num = prompt("Enter a Positive Floating number:");
// let roundoffValue = Math.round(num);
// let floorValue = Math.floor(num);
// let ceilValue = Math.ceil(num)
// console.log(num, roundoffValue, floorValue, ceilValue);

// document.write(`
// <p>Number: ${num}</p>
// <p>Round Off Value: ${roundoffValue}</p>
// <p>Floor Value: ${floorValue}</p>
// <p>Ceil Value: ${ceilValue}</p>
// `);


// ************* Question : 5 *****************

// let num = prompt("Enter a value to find its absolute: ");
// let absoluteValue = Math.abs(num);
// document.write(`
// <p>The absolute value of ${num} is ${absoluteValue}.</p>
// `);


// ************* Question : 6 *****************

// let diceValue = Math.floor(Math.random() * 6) + 1;
// document.write(`
// <p>Random Dice Value: ${diceValue}</p>
// `);


// ************* Question : 7 *****************

// var randomValue = Math.floor(Math.random() * 2);

// var coinResult = (randomValue === 0) ? 'Head' : 'Tails';

// document.write(`
// <p>Random Coin Value: ${coinResult}</p>
// `);


// ************* Question : 8 *****************

// let randomValue = Math.floor(Math.random() * 100) + 1;

// document.write(`
// <p>Random Number Between 1 and 100: ${randomValue}</p>
// `);


// ************* Question : 9 *****************

// var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

// var numericValue = parseFloat(userInput.replace(/[^\d.]/g, ""));

// if (!isNaN(numericValue)) {
//   document.write("<p>Your weight is: " + numericValue + " kilograms</p>");
// } else {
//   document.write("<p>Invalid input.</p>");
// }


// ************* Question : 10 *****************

// var randomNumber = Math.floor(Math.random() * 10) + 1;
// var inputNum = prompt("Please guess a number between 1 to 10: ");

// if (randomNumber == inputNum) {
//     alert("Congratulations, you have won")
// } else {
//     alert("Sorry, you lost.")
// }

// ************* Question : 11 *****************

// var date = Date();
// document.write(date)

// ************* Question : 12 *****************

// var currentDate = new Date();

// var monthNames = [
//   "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
// ];

// var currentMonthNumber = currentDate.getMonth();

// var currentMonthName = monthNames[currentMonthNumber];

// alert("Current Month: " + currentMonthName);


// ************* Question : 13 *****************

// var currentDate = new Date();

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var currentDayNumber = currentDate.getDay();

// var currentDayName = dayNames[currentDayNumber];


// var currentDayAbbreviation = currentDayName.slice(0, 3);


// alert("Today is: " + currentDayAbbreviation);


// ************* Question : 14 *****************

// var currentDate = new Date();

// var currentDayNumber = currentDate.getDay();


// if (currentDayNumber === 6 || currentDayNumber === 0) {
//   alert("It's Fun day");
// } else {
//   alert("It's a regular day");
// }


// ************* Question : 15 *****************

// var currentDate = new Date();

// var currentDayOfMonth = currentDate.getDate();

// if (currentDayOfMonth < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }