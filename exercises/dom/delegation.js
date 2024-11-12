// // Delegate the click event to the parent <ul> element and remove clicked <li> element
// const form = document.querySelector("#form");
// const list_item = document.getElementById("list_item");

// form.addEventListener("submit", e => {
//   e.preventDefault();  // Prevent the default form submit action

//   const username = document.getElementById("username").value;
//   const message = document.getElementById("message").value;

//   const newLi = document.createElement("li");
//   newLi.textContent = username + ": " + message;  // Create a new <li> with the username and message
//   list_item.append(newLi);  // Append the new <li> to the list

//   form.reset();  // Reset the form after submission
// });

// list_item.addEventListener("click", (e) => {
// 	const li = e.target;

// 	if (li.tagName === "LI") {  // Check if the clicked element is a <li>
// 		li.remove();  // Remove the <li> element
// 	}
// });

//Additional Example of Event Delegation
const itemList = document.getElementById("item-list");

itemList.addEventListener('click', event => {
	if (event.target && event.target.classList.contains('edit')){
		const listItem = event.target.closest('li');
		const itemText = listItem.firstChild.textContent.trim();
		const newText = prompt('Edit item:', itemText);
		if (newText) {
			listItem.firstChild.textContent = `${newText}`;
		}
	}

	if (event.target && event.target.classList.contains('delete')) {
		const listItem = event.target.closest('li');
		listItem.remove();
	}
})

// Add event listener for adding a new item
document.getElementById('add-item').addEventListener('click', function() {
  const newItemText = document.getElementById('new-item').value.trim();
  if (newItemText) {
    const newLi = document.createElement('li');
    newLi.innerHTML = `${newItemText} <button class="edit">Edit</button> <button class="delete">Delete</button>`;
    
    document.getElementById('item-list').appendChild(newLi);

    document.getElementById('new-item').value = '';
  }
});
