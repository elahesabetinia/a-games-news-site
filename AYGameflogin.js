
const form = document.getElementById("login-form");
const loginLink = document.getElementById("login-link");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    errorMessage.style.display = "none";
    loginLink.style.display = "block"; // Show the login link if credentials are valid
  } else {
    errorMessage.style.display = "block"; // Show error message if fields are empty
    loginLink.style.display = "none"; // Hide login link if credentials are missing
  }
});
