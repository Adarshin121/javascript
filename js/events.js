// Get the button element by its ID
let myButton = document.getElementById('myButton');

// Define a function to be executed when the button is clicked
function buttonClickHandler() {
  // Display an alert when the button is clicked
  alert('Button clicked!');
}

// Attach the click event handler to the button using the onclick property
myButton.onclick = buttonClickHandler;
