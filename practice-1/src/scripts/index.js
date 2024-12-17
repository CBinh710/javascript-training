const staticData = {
	products: [
		{
			id: 1,
			imageURL: './assets/images/products/gradient-graphic-t-shirt.png',
			name: 'Gradient Graphic T-Shirt',
			price: 290,
			discount: 10,
			color: ['pink', 'blue', 'skyblue'],
			size: ['s', 'm', 'l', 'xl'],
			description: 'A must-have for days on the go, this adidas juniors hoodie is made from soft fleece to keep you comfortable wherever you go. Ribbed cuffs add comfort and a zip down the front lets you adjust the amount of coverage.'	
		},
		{
			id: 2,
			imageURL: './assets/images/products/gradient-graphic-t-shirt.png',
			name: 'Gradient Graphic Shirt',
			price: 190,
			discount: 15,
			color: ['pink', 'blue', 'skyblue'],
			size: ['xxs', 'm', 'l'],
			description: 'A must-have for days on the go, this adidas juniors hoodie is made from soft fleece to keep you comfortable wherever you go. Ribbed cuffs add comfort and a zip down the front lets you adjust the amount of coverage.'	
		},
		{
			id: 3,
			imageURL: './assets/images/products/gradient-graphic-t-shirt.png',
			name: 'Gradient Graphic T-Shirt',
			price: 3900,
			discount: 30,
			color: ['orange', 'black', 'green'],
			size: ['xxs', 'l', 'xl'],
			description: 'A must-have for days on the go, this adidas juniors hoodie is made from soft fleece to keep you comfortable wherever you go. Ribbed cuffs add comfort and a zip down the front lets you adjust the amount of coverage.'	
		},
		{
			id: 4,
			imageURL: './assets/images/products/gradient-graphic-t-shirt.png',
			name: 'Gradient Graphic T-Shirt',
			price: 1900,
			discount: 20,
			color: ['gold', 'blue', 'green'],
			size: ['xs', 'm', 'xxxl'],
			description: 'A must-have for days on the go, this adidas juniors hoodie is made from soft fleece to keep you comfortable wherever you go. Ribbed cuffs add comfort and a zip down the front lets you adjust the amount of coverage.'	
		},
		{
			id: 5,
			imageURL: './assets/images/products/gradient-graphic-t-shirt.png',
			name: 'Gradient Graphic T-Shirt',
			price: 650,
			discount: 50,
			color: ['gold', 'pink', 'green'],
			size: ['xs', 'm', 'l', 'xl'],
			description: 'A must-have for days on the go, this adidas juniors hoodie is made from soft fleece to keep you comfortable wherever you go. Ribbed cuffs add comfort and a zip down the front lets you adjust the amount of coverage.'	
		},
		{
			id: 6,
			imageURL: './assets/images/products/gradient-graphic-t-shirt.png',
			name: 'Gradient Graphic T-Shirt',
			price: 1900,
			discount: 30,
			color: ['gold', 'black', 'skyblue'],
			size: ['xxs', 'l', 'xl'],
			description: 'A must-have for days on the go, this adidas juniors hoodie is made from soft fleece to keep you comfortable wherever you go. Ribbed cuffs add comfort and a zip down the front lets you adjust the amount of coverage.'	
		},
		{
			id: 7,
			imageURL: './assets/images/products/gradient-graphic-t-shirt.png',
			name: 'Gradient Graphic T-Shirt',
			price: 50,
			discount: 40,
			color: ['gold', 'black', 'skyblue'],
			size: ['m', 'l', 'xl'],
			description: 'A must-have for days on the go, this adidas juniors hoodie is made from soft fleece to keep you comfortable wherever you go. Ribbed cuffs add comfort and a zip down the front lets you adjust the amount of coverage.'	
		},
		{
			id: 8,
			imageURL: './assets/images/products/gradient-graphic-t-shirt.png',
			name: 'Gradient Graphic T-Shirt',
			price: 2000,
			discount: 10,
			color: ['violet', 'blue', 'skyblue'],
			size: ['s', 'm', 'xl', 'xxl'],
			description: 'A must-have for days on the go, this adidas juniors hoodie is made from soft fleece to keep you comfortable wherever you go. Ribbed cuffs add comfort and a zip down the front lets you adjust the amount of coverage.'	
		},
		{
			id: 9,
			imageURL: './assets/images/products/gradient-graphic-t-shirt.png',
			name: 'Gradient Graphic T-Shirt',
			price: 1900,
			discount: 24,
			color: ['violet', 'blue', 'skyblue'],
			size: ['s', 'm', 'l', 'xl'],
			description: 'A must-have for days on the go, this adidas juniors hoodie is made from soft fleece to keep you comfortable wherever you go. Ribbed cuffs add comfort and a zip down the front lets you adjust the amount of coverage.'	
		}
	]
};

/**
	This function will create an fake element to display error without using directly HTML element
	nextElementSibling: Return the HTML content of the next sibling
	insertAdjacentHTML('afterend', `...`): inserts HTML code into a specified position.
 */
function showError(input, messages) {
	const existingError = input.nextElementSibling;

	if (existingError && existingError.classList.contains('error-message') ) {
		existingError.remove();
	}

	input.insertAdjacentHTML('afterend', `<span class="error-message">${messages}</span>`);
}

//Clear all error messages
function clearError(form) {
	const errors = form.querySelectorAll('.error-message');

	errors.forEach(error => error.remove()); 
}

//Add event for cancel button
const cancelButton = document.getElementById('btnCancel');

cancelButton.addEventListener('click', function () {
	// Clear all error message
	clearError(form);

	//Reset form
	form.reset();
});

/**
	This function will validate input imported
 */

function validateAddProductForm(event) {
	event.preventDefault();

	const imageURLInput = document.getElementById('chooseFile');
	
	clearError(event.target);

	let isValid = true;

	//Validate imageURL 
	const imageURL = imageURLInput.value.trim();
	const validImageURL = /^https?:\/\/.+\.(png|jpg|jpeg)$/i.test(imageURL);

	if (!imageURL || !validImageURL) {
		showError(imageURLInput, "Image URL must be valid and in PNG, JPEG, or JPG format.")
		isValid = false;
	}

	if (isValid) {
		alert('Product added successfully!');
		location.reload();
	}
}


const form = document.querySelector('.add-form');

form.addEventListener('submit', validateAddProductForm);
