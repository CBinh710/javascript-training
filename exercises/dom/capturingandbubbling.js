// Bubbling (event propagates from the inner to outer element)
document.getElementById('outer').addEventListener('click', () => {
  console.log('Outer div clicked (bubbling)');
});

document.getElementById('middle').addEventListener('click', () => {
  console.log('Middle div clicked (bubbling)');
});

document.getElementById('inner').addEventListener('click', (event) => {
  event.stopPropagation();  // Stop event from bubbling up
  console.log('Inner div clicked (bubbling)');
});

// Capturing (event propagates from outer to inner element)
document.getElementById('outer').addEventListener('click', () => {
  console.log('Outer div clicked (capturing)');
}, true);

document.getElementById('middle').addEventListener('click', () => {
  console.log('Middle div clicked (capturing)');
}, true);

document.getElementById('inner').addEventListener('click', () => {
  console.log('Inner div clicked (capturing)');
}, true);
