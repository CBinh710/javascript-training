//Handles for responsive of filter
const filterIcon = document.getElementById('filter');
const filterForm = document.getElementById('filter-form');
const closeButton = document.getElementById('icon-close');

filterIcon.addEventListener('click', function() {
  filterForm.style.display = 'flex';
});

closeButton.addEventListener('click', function() {
  filterForm.style.display = 'none';
});


window.addEventListener('click', function(event) {
  if (event.target === filterForm) {
    filterForm.style.display = 'none';
  }
});

//Handles for slider bar
function handleLeftSlider(input) {
  input.value = Math.min(
    input.value,
    input.parentNode.childNodes[5].value - 1
  );
  var value =
    (100 /
      (parseInt(input.max) - parseInt(input.min))) *
      parseInt(input.value) -
    (100 /
      (parseInt(input.max) - parseInt(input.min))) *
      parseInt(input.min);

  var children = input.parentNode.childNodes[1].childNodes;
  children[1].style.width = value + '%';
  children[5].style.left = value + '%';
  children[7].style.left = value + '%';
  children[11].style.left = value + '%';
  children[11].childNodes[1].innerHTML = '$' + input.value;
}

function handleRightSlider(input) {
  input.value = Math.max(
    input.value,
    input.parentNode.childNodes[3].value - (-1)
  );
  var value =
    (100 /
      (parseInt(input.max) - parseInt(input.min))) *
      parseInt(input.value) -
    (100 /
      (parseInt(input.max) - parseInt(input.min))) *
      parseInt(input.min);

  var children = input.parentNode.childNodes[1].childNodes;
  children[3].style.width = 100 - value + '%';
  children[5].style.right = 100 - value + '%';
  children[9].style.left = value + '%';
  children[13].style.left = value + '%';
  children[13].childNodes[1].innerHTML = '$' + input.value;
}
