//Handles for responsive of filter
const filterIcon = document.getElementById('filter');
const filterForm = document.getElementById('filter-form');
const closeButton = document.getElementById('close-filter-icon');

filterIcon.addEventListener('click', function() {
  filterForm.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', function() {
  filterForm.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(event) {
  if (event.target === filterForm) {
    filterForm.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth >= 1440) {
    document.body.style.overflow = 'auto';
  }
});

//Handles for slider bar in mobile screen
var sliderSmall = document.getElementById("slider-range-small");
var outputSmall = document.getElementById("slider-price-small");
outputSmall.innerHTML = sliderSmall.value;

sliderSmall.oninput = function() {
  outputSmall.innerHTML = this.value;
  valPercentSmall = (this.value/sliderSmall.max)*100;
  sliderSmall.style.background = `linear-gradient(to right, #000 ${valPercentSmall}%, #f7f5f5e5 ${valPercentSmall}%)`;
}

//Handles for slider bar in desktop screen
var slider = document.getElementById("slider-range");
var output = document.getElementById("slider-price");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  valPercent = (this.value/slider.max)*100;
  slider.style.background = `linear-gradient(to right, #000 ${valPercent}%, #f7f5f5e5 ${valPercent}%)`;
}
