//variable example
// const a = 0;
// let p = 1;

//types example
// Primitive types

// Numbers
// let age = 30;           // Integer
// let temperature = 36.6;  // Floating-point number
// let negativeNumber = -15; // Negative number
// let largeNumber = 1e6;   // Large number (1 million)

// Strings
// let name = "Alice";             // Using double quotes
// let greeting = 'Hello world!';  // Using single quotes
// let message = `My age is ${age}`; // Template string using backticks

// Booleans
// let isJavaScriptFun = true;
// let isRaining = false;

// Symbols
// let uniqueId = Symbol('id');
// let anotherId = Symbol('id');// Each Symbol is unique, even with the same description
// console.log(uniqueId === anotherId); // false

// Operators
//Arithmetic operators
// let a = 10;
// let b = 5;
// console.log(a + b);
// console.log(a - b);

// //Assignment operators
// console.log(b += 5);
// console.log(b /= 5);
// console.log(b *= 5);

// //Comparison Operators
// console.log(b == 10);
// console.log(b === '10');

// // Logical Operators
// let c = true;
// let d = false;
// console.log(c && d);
// console.log(c || d);
// console.log(!c);

// //Conditional operator
// let age = 20;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log(canVote); //"

// //Typeof Operator
// console.log(typeof 42);    
// console.log(typeof "hello");  
// console.log(typeof true);  

// //Conditional operator
// //if else if statement
// let score = 85;
// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 80) {
//   console.log("Grade: B");
// } else if (score >= 70) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: F");
// }
// //Ternary operator
// let age = 18;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log(canVote);
// //Switch statement
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Unknown day");
// }
// //Logical conditions
// let hasID = true;
// if (age >= 18 && hasID) {
//   console.log("You can enter.");
// } else {
//   console.log("You cannot enter.");
// }
// let numbers = [5, 6, 10, 12, 15, 16, 20, 25, 24, 26, 50, 1120, 5579]
// const person = { name: "Binh", age: 22 }
// console.log(person)
// person.age = 1
// console.log(person)
// let captcha = ["a",5,6,56,5,6,44,66,12,13,"hello",10]
// let code = ["aptx4869"]
// Access Array Elements 
// console.log(captcha[0]); // "a"
// //Modifying Array Elements by its index
// captcha[0] = "Nỉ hảo"
// console.log(captcha[0]); // "Nỉ hảo"
// //Array length
// console.log(captcha.length); // 12
// //Array method
// captcha.push("Xia xia"); // Add elements to the end of an array
// captcha.pop(); // Remove the last element of an array
// captcha.shift(); // Remove the first element of an array
// captcha.unshift("Money"); // Add elements to the beginning of an array
// combine = captcha.concat(code); // Merge two or more arrays
// console.log(combine);
// console.log(captcha.slice(1,5)); // Extract a section of an array and return a new array
// captcha.splice(0,1,"Happy"); // Add/remove items to/from an array
// captcha.indexOf("hello"); // Find the index of an element
// console.log(captcha.indexOf("hello"));
// console.log(captcha.join(",")); //Join all array elements into a string

//Find even number in (*) array
// let evenNumbers = captcha.filter(item => typeof item === 'number' && item % 2 === 0)
// console.log(evenNumbers)
// // Convert (*) Numeric Values to Strings
//  	 let stringifiedNumbers = captcha.map(function(item) {
//     		if (typeof item === 'number') {
//           return item.toString(); // Convert numbers to strings
//        	} else {
//           return item; // Leave non-numeric elements unchanged
//        	}
//     		});
//   console.log(stringifiedNumbers);
// Find the First Numeric Value of (*)
// let captcha = ["a",5,6,56,5,6,44,66,12,13,"hello",10];

// let firstNumber = captcha.find(function(item) {
//     return typeof item === 'number';
// });

// console.log(firstNumber); // 5
// Find the Index of the First Numeric Value of (*)
// let captcha = ["a", 5, 6, 56, 5, 6, 44, 66, 12, 13, "hello", 10];

// let indexOfFirstNumber = captcha.findIndex(function(item) {
//     return typeof item === 'number';
// });

// console.log(indexOfFirstNumber); // 1
//Object
// const person = {
//   name: "Binh",
//   age: 22,
//   job: "Developer",
//   sayHello: function() {
//     console.log("Hello, I'm " + this.name);
//   }
// };

// console.log(person.name);
// person.age = 29;
// person.country = "Viet Nam";
// person.sayHello();
// delete person.job;
// console.log(person.job);  // undefined