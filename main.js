document.addEventListener("DOMContentLoaded", function () {
  // Get the "About" link element by its text content
  var aboutLink = document.querySelector('a.nav-link[href="#!"]');

  // Check if the "About" link exists
  if (aboutLink) {
    // Add a click event listener to the "About" link
    aboutLink.addEventListener("click", function (event) {
      // Redirect to the AboutUs.html page
      window.location.href = "AboutUs.html";

document.addEventListener("DOMContentLoaded", function () {
  // Get the "Home" button element by its text content
  var homeButton = document.querySelector('a.nav-link[href="Home.html"]');

  // Check if the "Home" button exists
  if (homeButton) {
    // Add a click event listener to the "Home" button
    homeButton.addEventListener("click", function (event) {
      // Prevent the default behavior (e.g., following the link)
      event.preventDefault();

      // Redirect to the Home.html page
      window.location.href = "Home.html";
  document.addEventListener("DOMContentLoaded", function () {
    // Find the "Popular players" dropdown item by its text content
    const popularPlayersItem = document.querySelector(".dropdown-menu a:contains('Popular players')");

    if (popularPlayersItem) {
        popularPlayersItem.addEventListener("click", function (e) {
            // Prevent the default behavior of the link
            e.preventDefault();

            // Redirect to the index.html page
            window.location.href = "index.html";
// main.js

document.addEventListener("DOMContentLoaded", function () {
  // Find the email input element by its ID
  var emailInput = document.getElementById("emailAddress");

  // Find the submit button element by its ID
  var submitButton = document.getElementById("submitButton");

  // Add a click event listener to the submit button
  submitButton.addEventListener("click", function (e) {
    // Get the entered email value
    var emailValue = emailInput.value;

    // Regular expression to validate email format
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check if the email format is valid
    if (!emailRegex.test(emailValue)) {
      // Prevent the form submission
      e.preventDefault();

      // Display an error message in the input box
      emailInput.setCustomValidity("Input an appropriate email address");
      emailInput.reportValidity();
    }
  });

  // Clear the custom validity message when the user starts typing
  emailInput.addEventListener("input", function () {
    emailInput.setCustomValidity("");
  });
});

  });
});



