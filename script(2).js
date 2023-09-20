document.addEventListener("DOMContentLoaded", function () {
  // Get the form element by its ID
  var signupForm = document.getElementById("signupForm");

  // Add a submit event listener to the form
  signupForm.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values of the input fields
    var username = document.getElementById("UserName").value;
    var password = document.getElementById("Password").value;

    // Check if both fields are filled
    if (username.trim() !== "" && password.trim() !== "") {
      // Redirect to Home(2).html
      window.location.href = "Home(2).html";
    } else {
      // Handle the case where not all fields are filled (display an error, etc.)
      // You can add your own error handling here if needed
      alert("Please fill in all fields.");
    }
  });
});
