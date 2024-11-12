// Delegate the click event to the parent <ul> element and remove clicked <li> element
const form = document.querySelector("#form");
const list_item = document.getElementById("list_item");

form.addEventListener("submit", e => {
  e.preventDefault();  // Prevent the default form submit action

  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;

  const newLi = document.createElement("li");
  newLi.textContent = username + ": " + message;  // Create a new <li> with the username and message
  list_item.append(newLi);  // Append the new <li> to the list

  form.reset();  // Reset the form after submission
});

list_item.addEventListener("click", (e) => {
	const li = e.target;

	if (li.tagName === "LI") {  // Check if the clicked element is a <li>
		li.remove();  // Remove the <li> element
	}
});
