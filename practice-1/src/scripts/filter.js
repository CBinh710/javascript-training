const filterIcon = document.getElementById('filter');
const filterForm = document.getElementById('filterForm');
const closeButton = document.getElementById('closeFilterIcon');
const addProduct = document.getElementById('addProduct');
const displayAddForm = document.getElementById('addProductContainer');
const cancelButton = document.getElementById('btnCancel');
const form = document.querySelector('.add-form');

// Function to clear all error messages in the form
function clearError(form) {
	// Select all elements with the class 'error-message' inside the form
	const errors = form.querySelectorAll('.error-message');

	// Loop through each error element and clear its content
	errors.forEach(error => error.innerHTML = '');
}

// Add a 'submit' event listener to the form
form.addEventListener('submit', validateAddProductForm);

function toggleBodyScroll(enable) {
  document.body.style.overflow = enable ? 'auto' : 'hidden';
}

addProduct.addEventListener('click', function () {
  displayAddForm.classList.remove('hidden');
  displayAddForm.classList.add('flex');
  toggleBodyScroll(false);
});

cancelButton.addEventListener('click', function () {
  displayAddForm.classList.remove('flex');
  displayAddForm.classList.add('hidden');
  toggleBodyScroll(true);
  clearError(form);
	form.reset();
});

filterIcon.addEventListener('click', function () {
  filterForm.classList.remove('hidden');
  filterForm.classList.add('flex');
  toggleBodyScroll(false);
});

closeButton.addEventListener('click', function () {
  filterForm.classList.remove('flex');
  filterForm.classList.add('hidden');
  toggleBodyScroll(true);
});

window.addEventListener('click', function (event) {
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

window.addEventListener('resize', function () {
  if (window.innerWidth >= 1440) {
    toggleBodyScroll(true);
  }
});

//Handles for slider bar in mobile screen
const sliderSmall = document.getElementById("sliderRangeSmall");
const outputSmall = document.getElementById("sliderPriceSmall");
outputSmall.innerHTML = sliderSmall.value;

sliderSmall.oninput = function () {
  outputSmall.innerHTML = this.value;
  valPercentSmall = (this.value / sliderSmall.max) * 100;
  sliderSmall.style.background = `linear-gradient(to right, #000 ${valPercentSmall}%, #f7f5f5e5 ${valPercentSmall}%)`;
}

//Handles for slider bar in desktop screen
const slider = document.getElementById("sliderRange");
const output = document.getElementById("sliderPrice");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  valPercent = (this.value / slider.max) * 100;
  slider.style.background = `linear-gradient(to right, #000 ${valPercent}%, #f7f5f5e5 ${valPercent}%)`;
}
