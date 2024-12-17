//Handles for responsive of filter
document.addEventListener('DOMContentLoaded', function () {
  const filterIcon = document.getElementById('filter');
  const filterForm = document.getElementById('filterForm');
  const closeButton = document.getElementById('closeFilterIcon');
  const addProduct = document.getElementById('addProduct');
  const displayAddForm = document.getElementById('addProductContainer');
  const cancelButton = document.getElementById('btnCancel');
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
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1440) {
      toggleBodyScroll(true);
    }
  });
});

//Handles for slider bar in mobile screen
const sliderSmall = document.getElementById("sliderRangeSmall");
const outputSmall = document.getElementById("sliderPriceSmall");
outputSmall.innerHTML = sliderSmall.value;

sliderSmall.oninput = function() {
  outputSmall.innerHTML = this.value;
  valPercentSmall = (this.value/sliderSmall.max)*100;
  sliderSmall.style.background = `linear-gradient(to right, #000 ${valPercentSmall}%, #f7f5f5e5 ${valPercentSmall}%)`;
}

//Handles for slider bar in desktop screen
const slider = document.getElementById("sliderRange");
const output = document.getElementById("sliderPrice");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  valPercent = (this.value/slider.max)*100;
  slider.style.background = `linear-gradient(to right, #000 ${valPercent}%, #f7f5f5e5 ${valPercent}%)`;
}
  