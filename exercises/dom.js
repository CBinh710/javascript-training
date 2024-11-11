// //Get element by ID
// const mainElement = document.getElementById("main");
// console.log(mainElement);

//Get element by Class
// const items = document.getElementsByClassName("item");
// console.log(items);
// console.log(items[0]);

// //Get element by tag name
// const paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);
// console.log(paragraphs[0].textContent);

// //Access the first element with class="content"
// const contentElement = document.querySelector(".content");
// console.log(contentElement);

// //Access element with id="main"
// const mainDiv = document.querySelector("#main");
// console.log(mainDiv);

// // Access all elements with class="item"
// const itemElements = document.querySelectorAll(".item");
// console.log(itemElements);

// // Iterate through the elements and print out the content
// itemElements.forEach((item, index) => {
//     console.log(`${index + 1}: ${item.textContent}`);
// })
//Using getElementById to get change data
// document.getElementById("header").textContent = "Hello everyone"
//Using getElementByClassName to access all element of class "item" index = 1 and change background color
// const boxes = document.getElementsByClassName("item")

// for(let i = 0; boxes.length > i; i++){
//   if(i==1){
//     boxes[i].style.backgroundColor = "green";
//   }
// }

//Using querySelector to choose first "item" class and change it's color to "red"
// const itemElement = document.querySelector(".item")
// const changeColorItem = itemElement.style.color = "red"

// //Using querySelectorAll to choose all content and change it to "My name is Binh"
// const chooseAllItem = document.querySelectorAll(".item")
// chooseAllItem.forEach( item => {
//   item.textContent = "My name is Binh"    
// });

// //Write JavaScript code to add a new <li> element with the content "New item" to the end of the element with id="container".
// const newElement = document.createElement("li");
// newElement.textContent = "New item";

// const addNewItem = document.getElementById("container");
// addNewItem.append(newElement); 

// //Write JS code to remove first element with the class box from the DOM
// const firstItem = document.querySelector(".item")
// firstItem.remove();

// //Write JavaScript code so that when a user clicks on an element with id="button", the message "Button clicked!" will appear in the console.
// const button = document.getElementById("button");

// button.addEventListener("click", function(){
//   console.log("Button clicked!")
// });

// //Write JavaScript code to change the background color of an element with class="item" to red when the user hovers over it.
// const hoveredItem = document.querySelectorAll(".item");

// hoveredItem.forEach(item => {
//   item.addEventListener("mouseover", function() {
//     item.style.backgroundColor = "red";
//   })

//   item.addEventListener("mouseout", function(){
//     item.style.backgroundColor = "";
//   })
// })

// // Change the content of the p element
// document.getElementById("content").textContent = "Face bo ok";

// // Change the properties of the a element
// document.getElementById("link").href = "https://newsite.com";
// document.getElementById("link").textContent = "New site";

// // Add a CSS class to the div element with the class "item"
// document.querySelector(".item").classList.add("highlight");

// // Add a new item to the list
// const newItem = document.createElement("li");
// newItem.textContent = "Item 4";
// document.getElementById("container").appendChild(newItem);

//  // Change the style of element p document.getElementById("intro").style.color = "blue";
//  document.getElementById("content").style.fontSize = "20px";
//Event samples

//Display alert "Button clicked" when click mouse
// const button = document.getElementById('button');
// button.addEventListener('click', function(){
//   alert('Button clicked');
// });

// //Change background color after hover to header and restore when mouse out
// const hoverHeader = document.getElementById("header");

// hoverHeader.addEventListener('mouseover', function(){
// 	hoverHeader.style.backgroundColor = "red"
// });

// hoverHeader.addEventListener('mouseout',function(){
// 	hoverHeader.style.backgroundColor = ""
// })
// //Create a "Click me" button and each time the user clicks the button, display the number of clicks
// let count = 0;
// const buttonClick = document.getElementById("clickButton");
// const countDisplay = document.getElementById("countDisplay")

// buttonClick.addEventListener('click', function(){
// 	count++;
// 	countDisplay.textContent = `Times clicked: ${count}`
// });
// //Create a form with an input field and a submit button. When the user presses the submit button, stop the default submit action and display a message.
// const form = document.getElementById("myForm");
// const input = document.getElementById("myInput");

// form.addEventListener('submit', function(event){
// 	event.preventDefault();
// 	alert("Nooo")
// });

// //Create an input box and when the user enters text, display that text below the input box.
// const inputText = document.getElementById("inputText");
// const output = document.getElementById("output");

// inputText.addEventListener('input', function(){
// 	output.textContent = inputText.value;
// })

// //Create an input field and display information about the character the user just pressed when the "keydown" and "keyup" events occur.
// const keyInput = document.getElementById("keyInput");
// const ketDisplay = document.getElementById("keyDisplay");

// keyInput.addEventListener("keydown",function(event){
// 	keyDisplay.textContent = "Key pressed (keydown):" + event.key;
// });

// keyInput.addEventListener("keyup",function(event){
// 	keyDisplay.textContent = "Key released (keyup):" + event.key;
// });

// //When the user moves the mouse within the browser window, display the mouse position (X and Y coordinates).
// document.addEventListener("mousemove", function(event){
// 	const mousePosition = this.getElementById("mousePosition");
// 	mousePosition.textContent = `Mouse position: X = ${event.clientX}, Y = ${event.clientY}`
// })

// //Change background after 3s
// window.addEventListener("load", function(event){
// 	setTimeout(function(){
// 		document.body.style.background = "lightblue"
// 	},3000)
// })

// document.getElementById('outer').addEventListener('click', () => {
//   console.log('Outer div clicked (bubbling)');
// });

// document.getElementById('middle').addEventListener('click', () => {
//   console.log('Middle div clicked (bubbling)');
// });

// document.getElementById('inner').addEventListener('click', (event) => {
//   event.stopPropagation();
// 	console.log('Inner div clicked (bubbling)');
// });

// document.getElementById('outer').addEventListener('click', () => {
//   console.log('Outer div clicked (capturing)');
// }, true);

// document.getElementById('middle').addEventListener('click', () => {
//   console.log('Middle div clicked (capturing)');
// }, true);

// document.getElementById('inner').addEventListener('click', () => {
//   console.log('Inner div clicked (capturing)');
// }, true);

//Add ul after submit
const form = document.querySelector("#form");
const list_item = document.getElementById("list_item");

form.addEventListener("submit", e => {
	e.preventDefault();
	
	const username = document.getElementById("username").value;
	const message = document.getElementById("message").value
//
	const newLi = document.createElement("li");
	newLi.textContent = username + ":" + message;
//Create new li
	list_item.append(newLi);
//Reset form
	form.reset();
});

//Delete li elements when click on it and dont use delegation
// const lis = document.querySelectorAll("li");
// //browser each element
// lis.forEach((li) => {
// 	li.addEventListener("click", () => {
// 		li.remove();
// 	});
// });

list_item.addEventListener("click", (e) => {
	const li = e.target;

	if (li.tagName === "LI"){
		li.remove()
	}
})
