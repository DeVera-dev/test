document.addEventListener("DOMContentLoaded", function () {
  // Get the signup form element
  const signupForm = document.getElementById("signupForm");

  // Add a submit event listener to the form
  signupForm.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input values
    const username = document.getElementById("UserName").value;
    const password = document.getElementById("Password").value;

    // Check if the username and password match the credentials
    if (username === "admin" && password === "admin") {
      // Redirect to the desired page for successful login as Administrator
      window.location.href = "index(A).html"; // Replace with your desired URL
    } else if (username === "student1" && password === "1234") {
      // Redirect to the desired page for successful login as Student
      window.location.href = "index(2).html"; // Replace with your desired URL
    } else {
      // Handle incorrect login credentials (e.g., show an error message)
      alert("Invalid username or password. Please try again.");
    }
  });
});
