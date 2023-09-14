// 18 to 20 chapters -------------------------------------------------------

// 1st question ------------------------------------------------------------

// for (var i = 0; i<5; i++) {
//     document.write("Hello World!", "<br>");
// }


// 2nd question ------------------------------------------------------------

// for (var i = 1; i<=10; i++) {
//     document.write(i, "<br>");
// }


// 3rd question ------------------------------------------------------------

// var num = +prompt("Enter a number to print its multiplication table: ");
// var len = +prompt("Enter lenght of multiplication table: ");

// for (var i = 1; i<=len; i++) {
//     document.write(num+ " x " + i + " = " + num*i, "<br>");
// }


// 4th question ------------------------------------------------------------

// var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i], "<br>");
// }


// 5th question ------------------------------------------------------------

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i +" is " + fruits[i], "<br>");
// }


// 6th question ------------------------------------------------------------

// var num = prompt("Enter number of items: ");
// var arr = [];

// for (var i = 0; i < num; i++) {
//     var item = prompt("Enter value for index " + i);
//     arr.push(item);
// }

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i], "<br>");
// }


// 7th question ------------------------------------------------------------

// var Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var ReverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// var Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// var Series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];

// document.write("<h3>Counting</h3>","<br>",Counting, "<br>");
// document.write("<h3>Reverse Counting</h3>","<br>",ReverseCounting, "<br>");
// document.write("<h3>Even</h3>","<br>",Even, "<br>");
// document.write("<h3>Odd</h3>","<br>",Odd, "<br>");
// document.write("<h3>Series</h3>","<br>",Series, "<br>");


// 8th question ------------------------------------------------------------

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var inp = prompt("Welcome to ABC Bakey. What do you want to order sir/ma'am? ");
// var match = "no";

// for (var i = 0; i< items.length; i++) {
//     if (inp == items[i]) {
//         match = "yes";
//         alert(inp + " is available at index " + i + " in our bakery.");
//         break
//     }
// }

// if (match == "no") {
//     alert(inp + " is not available in our bakery.");
// }


// 9th question ------------------------------------------------------------

// var numbers = [24, 99, 78, 91, 12];
// var max = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// document.write("Array Itmes: " + numbers, "<br>");
// document.write("The largest number is " + max);


// 10th question -----------------------------------------------------------

// var numbers = [24, 99, 78, 91, 12];
// var min = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }

// document.write("Array Itmes: " + numbers, "<br>");
// document.write("The smallest number is " + min);


// 11th question -----------------------------------------------------------

// var numbers = [24, 99, 78, 91, 12];
// var max = numbers[0];
// var min = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// document.write("Array Itmes: " + numbers, "<br>");
// document.write("The largest number is " + max, ".<br>");
// document.write("The smallest number is " + min + ".");


// 12th question -----------------------------------------------------------

// for (var i = 1; i<=100; i++) {
//     document.write(5*i + " , ");
// }


// 13th question -----------------------------------------------------------

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// document.write("<table><tr><td>Students</td><td>Scores</td></tr>");
// for (var i = 0; i < students.length; i++) {
//     document.write(`<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`)
// }
// document.write("</table>");


// 15th question -----------------------------------------------------------

// var arr = [ [1,2,3] , [4,5,6] , [7,8,9] ];

// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         document.write(arr[i][j] + " ")
//     }
//     document.write("<br>")
// }


// 19th question -----------------------------------------------------------

// var num = 7;

// for (var i = 1; i <= 7; i++) {
//     for (var j = num; j >= 1; j--) {
//         document.write("*")
//     }
//     num--
//     document.write("<br>")
// }


// 20th question -----------------------------------------------------------

// 20(a)

// var num = 5;

// for (var i = 1; i <= 4; i++) {
//     for (var j = num; j >= 1; j--) {
//         document.write("*")
//     }
//     document.write("<br>")
// }


// 20(b)

// var num = 5;

// for (var i = 1; i <= num; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }


// 20(c)

// var num = 5;

// for (var i = 1; i <= 5; i++) {
//     for (var j = num; j >= 1; j--) {
//         document.write("*")
//     }
//     num--
//     document.write("<br>")
// }


// 20 - 25 chapters --------------------------------------------------------


// 1st question ------------------------------------------------------------

// var firstName = prompt("Enter First Name: ");
// var upperFirstName = firstName.charAt(0).toUpperCase();
// var lowerFirstName = firstName.slice(1).toLowerCase();
// firstName = upperFirstName + lowerFirstName;
// var lastName = prompt("Enter Last Name: ");
// var upperLastName = lastName.charAt(0).toUpperCase();
// var lowerLastName = lastName.slice(1).toLowerCase();
// lastName = upperLastName + lowerLastName;

// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName);


// 2nd question ------------------------------------------------------------

// var inp = prompt("What is your favourite mobile phone model: ");
// document.write("My favourite mobile phone model is " + inp + "<br>Length of string: " + inp.length);


// 3rd question ------------------------------------------------------------

// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>Index of 'n': " + nationality.indexOf("n"))


// 4th question ------------------------------------------------------------

// var word = "Hello World";
// document.write("String: " + word + "<br>Last index of 'l': " + word.lastIndexOf("l"));


// 5th question ------------------------------------------------------------

// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>Character at '3': " + nationality.charAt(3));


// 6th question ------------------------------------------------------------

// var firstName = prompt("Enter First Name: ");
// var upperFirstName = firstName.charAt(0).toUpperCase();
// var lowerFirstName = firstName.slice(1).toLowerCase();
// firstName = upperFirstName.concat(lowerFirstName);
// var lastName = prompt("Enter Last Name: ");
// var upperLastName = lastName.charAt(0).toUpperCase();
// var lowerLastName = lastName.slice(1).toLowerCase();
// lastName = upperLastName.concat(lowerLastName);

// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName);


// 7th question ------------------------------------------------------------

// var city = "Hyderabad";
// var replaced = city.replace("Hydera", "Islama");
// document.write("City: " + city + "<br>After Replacement: " + replaced);


// 8th question ------------------------------------------------------------

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaced = message.replace(/and/g, "&");
// document.write("Message: " + message + "<br>After Replacement: " + replaced);


// 9th question ------------------------------------------------------------

// var string = "479";
// document.write("String: " + string + "<br>Type: " + typeof(string), "<br>");
// var num = parseInt(string);
// document.write("Number: " + num + "<br>Type: " + typeof(num));


// 10th question -----------------------------------------------------------

// var url = prompt("Enter url: ");
// var domain = url.slice(4);
// document.write("URL: " + url + "<br>Domain: " + domain);


// 11th question -----------------------------------------------------------

// var inp = prompt("Enter a word: ");
// document.write("User input: " + inp + "<br>Upper case: " + inp.toUpperCase());


// 12th question -----------------------------------------------------------

// var inp = prompt("Enter a word: ");
// document.write("User input: " + inp + "<br>Lower case: " + inp.toLowerCase());


// 13th question -----------------------------------------------------------

// var userInput = prompt("Enter First Name: ");
// var upperUserInput = userInput.charAt(0).toUpperCase();
// var lowerUserInput = userInput.slice(1).toLowerCase();
// var titled = upperUserInput + lowerUserInput

// document.write("User input: " + userInput + "<br>Title case: " + titled);


// 14th question -----------------------------------------------------------

// var num = 35.36;
// var strNum = num.toString();
// var withoutDot = strNum.replace(".", "");
// document.write("Number: " + num + "<br>Result: " + withoutDot);


// 15th question -----------------------------------------------------------

// var a = "3";
// var b = "3";
// document.write("a + b = " + a+b);


// 16th question -----------------------------------------------------------

// var a = "3";
// var b = "3";
// var res = a-b;
// document.write("a - b = " + res.toString());