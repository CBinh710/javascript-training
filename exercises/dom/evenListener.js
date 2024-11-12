// When the user clicks the button with id="button", log a message to the console
const button = document.getElementById("button");
button.addEventListener("click", function() {
  console.log("Button clicked!");  // Log "Button clicked!" when the button is clicked
});

// When the user clicks the button with id="clickButton", count and display the number of clicks
let count = 0;
const clickButton = document.getElementById("clickButton");
const countDisplay = document.getElementById("countDisplay");

clickButton.addEventListener("click", function() {
  count++;
  countDisplay.textContent = `Times clicked: ${count}`;  // Update the click count display
});
