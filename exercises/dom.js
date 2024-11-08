//Get element by ID
const mainElement = document.getElementById("main");
console.log(mainElement);

//Get element by Class
const items = document.getElementsByClassName("item");
console.log(items);
console.log(items[0]);

//Get element by tag name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log(paragraphs[0].textContent);

//Access the first element with class="content"
const contentElement = document.querySelector(".content");
console.log(contentElement);

//Access element with id="main"
const mainDiv = document.querySelector("#main");
console.log(mainDiv);

// Access all elements with class="item"
const itemElements = document.querySelectorAll(".item");
console.log(itemElements);

// Iterate through the elements and print out the content
itemElements.forEach((item, index) => {
    console.log(`${index + 1}: ${item.textContent}`);
})