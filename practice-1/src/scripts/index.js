const elements = {
  filterIcon: document.getElementById('filter'),
  filterForm: document.getElementById('filterForm'),
  closeButton: document.getElementById('closeFilterIcon'),
  addProduct: document.getElementById('addProduct'),
  displayAddForm: document.getElementById('addProductContainer'),
  cancelButton: document.getElementById('btnCancel'),
  form: document.querySelector('.add-form'),
  sliderSmall: document.getElementById("sliderRangeSmall"),
  outputSmall: document.getElementById("sliderPriceSmall"),
  slider: document.getElementById("sliderRange"),
  output: document.getElementById("sliderPrice")
};
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

// Clear all error messages
const clearError = (form) => {
  const errors = form.querySelectorAll('.error-message');
  errors.forEach(error => (error.innerHTML = ''));
};

// Validate Image URL
const validateImageURL = (imageURL) => {
  const isValid = /^https?:\/\/.+\.(png|jpg|jpeg)$/i.test(imageURL?.trim());
  const message = isValid ? null : 'Image URL must be a valid PNG, JPEG, or JPG.';
  return { isValid, message };
};

// Validate all fields and return errors
const validateFields = (formData, form) => {
  const errors = {}; // Object to store validation errors
  const errorElements = form.querySelectorAll('.error-message'); // Get all error message elements

  // List of validation functions for each field
  const validationResults = [
    { field: 'imageURL', result: validateImageURL(formData.get('chooseFile')) },
  ];

  // Iterate through validation results and update errors
  validationResults.forEach(({ field, result }, index) => {
    if (!result.isValid) {
      errors[field] = result.message; // Store error message for the field
      errorElements[index].innerHTML = result.message; // Display error message in the form
    }
  });

  return errors; // Return the collected errors
};

// Main validation function
const validateAddProductForm = (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = {
    is_valid: true,
    errors: {},
  };

  // Clear previous errors
  clearError(form);

  // Validate fields
  data.errors = validateFields(formData, form);

  // Check if form is valid
  data.is_valid = Object.keys(data.errors).length === 0;

  return data;
};


// Submit event listener
document.querySelector('.add-form').addEventListener('submit', (event) => {
  const validationResult = validateAddProductForm(event);

  if (validationResult.is_valid) {
    const formData = new FormData(event.target);
    //TODO:
    // Add product card

    // Clear the form
    event.target.reset();
    alert('Product added successfully!');
  } else {
    console.error('Validation errors:', validationResult.errors);
  }
});

elements.outputSmall.innerHTML = elements.sliderSmall.value;
elements.output.innerHTML = elements.slider.value;

function toggleBodyScroll(enable) {
  document.body.style.overflow = enable ? 'auto' : 'hidden';
}

elements.addProduct.addEventListener('click', () => {
  elements.displayAddForm.classList.remove('hidden');
  elements.displayAddForm.classList.add('flex');
  toggleBodyScroll(false);
});

elements.cancelButton.addEventListener('click', () => {
  elements.displayAddForm.classList.remove('flex');
  elements.displayAddForm.classList.add('hidden');
  toggleBodyScroll(true);
  clearError(elements.form);
  elements.form.reset();
});

elements.filterIcon.addEventListener('click', () => {
  elements.filterForm.classList.remove('hidden');
  elements.filterForm.classList.add('flex');
  toggleBodyScroll(false);
});

elements.closeButton.addEventListener('click', () => {
  elements.filterForm.classList.remove('flex');
  elements.filterForm.classList.add('hidden');
  toggleBodyScroll(true);
});

window.addEventListener('click', (event) => {
  if (event.target === elements.filterForm || event.target === elements.displayAddForm) {
    elements.filterForm.classList.add('hidden');
    elements.filterForm.classList.remove('flex');
    elements.displayAddForm.classList.remove('flex');
    elements.displayAddForm.classList.add('hidden');
    toggleBodyScroll(true);
    clearError(elements.form);
    elements.form.reset();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1440) {
    toggleBodyScroll(true);
  }
});

// Handles for slider bar in mobile screen
elements.sliderSmall.oninput = () => {
  elements.outputSmall.innerHTML = elements.sliderSmall.value;
  let valPercentSmall = (elements.sliderSmall.value / elements.sliderSmall.max) * 100;
  elements.sliderSmall.style.background = `linear-gradient(to right, #000 ${valPercentSmall}%, #f7f5f5e5 ${valPercentSmall}%)`;
};

// Handles for slider bar in desktop screen
elements.slider.oninput = () => {
  elements.output.innerHTML = elements.slider.value;
  let valPercent = (elements.slider.value / elements.slider.max) * 100;
  elements.slider.style.background = `linear-gradient(to right, #000 ${valPercent}%, #f7f5f5e5 ${valPercent}%)`;
};