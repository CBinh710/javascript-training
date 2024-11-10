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
document.getElementById("header").textContent = "Hello everyone"
//Using getElementByClassName to access all element of class "item" index = 1 and change background color
const boxes = document.getElementsByClassName("item")

for(let i = 0; boxes.length > i; i++){
  if(i==1){
    boxes[i].style.backgroundColor = "green";
  }
}

//Using querySelector to choose first "item" class and change it's color to "red"
const itemElement = document.querySelector(".item")
const changeColorItem = itemElement.style.color = "red"

//Using querySelectorAll to choose all content and change it to "My name is Binh"
const chooseAllItem = document.querySelectorAll(".item")
chooseAllItem.forEach( item => {
  item.textContent = "My name is Binh"    
});

//Write JavaScript code to add a new <li> element with the content "New item" to the end of the element with id="container".
const newElement = document.createElement("li");
newElement.textContent = "New item";

const addNewItem = document.getElementById("container");
addNewItem.append(newElement); 

//Write JS code to remove first element with the class box from the DOM
const firstItem = document.querySelector(".item")
firstItem.remove();

//Write JavaScript code so that when a user clicks on an element with id="button", the message "Button clicked!" will appear in the console.
const button = document.getElementById("button");

button.addEventListener("click", function(){
  console.log("Button clicked!")
});

//Write JavaScript code to change the background color of an element with class="item" to red when the user hovers over it.
const hoveredItem = document.querySelectorAll(".item");

hoveredItem.forEach(item => {
  item.addEventListener("mouseover", function() {
    item.style.backgroundColor = "red";
  })

  item.addEventListener("mouseout", function(){
    item.style.backgroundColor = "";
  })
})
