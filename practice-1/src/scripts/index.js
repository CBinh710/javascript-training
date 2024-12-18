const filterIcon = document.getElementById('filter');
const filterForm = document.getElementById('filterForm');
const closeButton = document.getElementById('closeFilterIcon');
const addProduct = document.getElementById('addProduct');
const displayAddForm = document.getElementById('addProductContainer');
const cancelButton = document.getElementById('btnCancel');
const form = document.querySelector('.add-form');
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

// Function to clear all error messages
function clearError(form) {
  const errors = form.querySelectorAll('.error-message');
  errors.forEach(error => error.innerHTML = '');
}

const validateAddProductForm = (event) => {
  event.preventDefault();

  const data = {
    is_valid: true,
    errors: {}
  };

  // Query all input fields and error elements
  const imageInputs = document.querySelectorAll('.chooseFile');
  const imageErrors = document.querySelectorAll('.imageError');

  // Use forEach to iterate through the NodeList
  imageInputs.forEach((input, index) => {
    if (!validateImageURL(input.value)) {
      data.is_valid = false;
      data.errors[`imageURL_${index}`] = "Image URL must be valid and in PNG, JPEG, or JPG format.";

      // Display the corresponding error message
      imageErrors[index].innerHTML = "Image URL must be valid and in PNG, JPEG, or JPG format.";
    }
  });

  return data;
}

// Function to validate the Image URL
const validateImageURL = (imageURL) => {
  const trimmedURL = imageURL.trim();
  return /^https?:\/\/.+\.(png|jpg|jpeg)$/i.test(trimmedURL);
}

// Submit event listener
form.addEventListener('submit', (event) => {
  clearError(event.target); // Clear previous errors

  const validationResult = validateAddProductForm(event);

  if (!validationResult.is_valid) {
    // Handle displaying error messages (already handled in the loop above)
  } else {
    alert('Product added successfully!');
  }
});

function toggleBodyScroll(enable) {
  document.body.style.overflow = enable ? 'auto' : 'hidden';
}

addProduct.addEventListener('click', () => {
  displayAddForm.classList.remove('hidden');
  displayAddForm.classList.add('flex');
  toggleBodyScroll(false);
});

cancelButton.addEventListener('click', () => {
  displayAddForm.classList.remove('flex');
  displayAddForm.classList.add('hidden');
  toggleBodyScroll(true);
  clearError(form);
	form.reset();
});

filterIcon.addEventListener('click', () => {
  filterForm.classList.remove('hidden');
  filterForm.classList.add('flex');
  toggleBodyScroll(false);
});

closeButton.addEventListener('click', () => {
  filterForm.classList.remove('flex');
  filterForm.classList.add('hidden');
  toggleBodyScroll(true);
});

window.addEventListener('click', (event) => {
  if (event.target === filterForm || event.target === displayAddForm) {
    filterForm.classList.add('hidden');
    filterForm.classList.remove('flex');
    displayAddForm.classList.remove('flex');
    displayAddForm.classList.add('hidden');
    toggleBodyScroll(true);
    clearError(form);
    form.reset();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1440) {
    toggleBodyScroll(true);
  }
});

//Handles for slider bar in mobile screen
const sliderSmall = document.getElementById("sliderRangeSmall");
const outputSmall = document.getElementById("sliderPriceSmall");
outputSmall.innerHTML = sliderSmall.value;

sliderSmall.oninput = () => {
  outputSmall.innerHTML = this.value;
  valPercentSmall = (this.value / sliderSmall.max) * 100;
  sliderSmall.style.background = `linear-gradient(to right, #000 ${valPercentSmall}%, #f7f5f5e5 ${valPercentSmall}%)`;
}

//Handles for slider bar in desktop screen
const slider = document.getElementById("sliderRange");
const output = document.getElementById("sliderPrice");
output.innerHTML = slider.value;

slider.oninput = () => {
  output.innerHTML = this.value;
  valPercent = (this.value / slider.max) * 100;
  slider.style.background = `linear-gradient(to right, #000 ${valPercent}%, #f7f5f5e5 ${valPercent}%)`;
}
