// Static data containing a list of products
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

const form = document.querySelector('.add-form');

/**
 * Function to validate the 'Add Product' form
 * @param {Event} event - The submit event triggered by the form
 */

function validateAddProductForm(event) {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Get the image URL input field and error display element
	const imageError = document.querySelector('.imageError');
	const imageURLInput = document.querySelector('.chooseFile');
	// Flag to track whether the form is valid
	let isValid = true;

	// Validate the Image URL field
	const imageURL = imageURLInput.value.trim(); // Trim whitespace from the input
	// Regular expression to check for valid image URLs ending with png, jpg, or jpeg
	const VALIDURL = /^https?:\/\/.+\.(png|jpg|jpeg)$/i.test(imageURL);

	// Display error message if the URL is empty or invalid
	if (!imageURL || !VALIDURL) {
		imageError.innerHTML = "Image URL must be valid and in PNG, JPEG, or JPG format.";
		isValid = false; // Mark form as invalid
	} else {
		isValid = true;
	}

	// If all fields pass validation
	if (isValid) {
		alert('Product added successfully!'); // Show success message
	}
}

// Add a 'submit' event listener to the form
form.addEventListener('submit', validateAddProductForm);
