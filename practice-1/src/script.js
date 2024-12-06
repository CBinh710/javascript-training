const filterIcon = document.getElementById('filter');
const filterForm = document.getElementById('filter-form');
const closeButton = document.getElementById('btn-close');

filterIcon.addEventListener('click', function() {
  filterForm.style.display = 'flex';
});

closeButton.addEventListener('click', function() {
  filterForm.style.display = 'none'; // Ẩn modal
});

// Khi người dùng click ra ngoài modal, ẩn modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    filterForm.style.display = 'none'; // Ẩn modal
  }
});

