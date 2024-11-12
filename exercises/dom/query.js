// Query the element by ID and modify its content
document.getElementById("header").textContent = "Hello everyone";  // Modify the title content

// Query all elements with class="item" and modify their content
const itemElements = document.querySelectorAll(".item");
itemElements.forEach(item => {
  item.textContent = "My name is Binh";  // Modify the content of all elements with class "item"
});

// Add a new element to the end of the list with id "container"
const newElement = document.createElement("li");
newElement.textContent = "New item";
const addNewItem = document.getElementById("container");
addNewItem.append(newElement);  // Append the new "New item" to the list
