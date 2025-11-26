// script.js

document.addEventListener('DOMContentLoaded', function () {

    // Select the necessary elements (DOM Manipulation)
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add the 'submit' event listener to the form
    form.addEventListener('submit', function (event) {

        // CRITICAL: Prevent the default form submission (page refresh)
        event.preventDefault();

        validateForm();
    });

    function validateForm() {

        // 1. Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // 2. Initialize tracking variables
        let isValid = true;
        const messages = [];

        // --- Validation Checks ---

        // FAILED REQUIREMENT: Username Validation (must be >= 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // FAILED REQUIREMENT: Email Validation (must contain '@' and '.')
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must contain '@' and '.').");
        }

        // FAILED REQUIREMENT: Password Validation (must be >= 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // --- Feedback Display Logic ---

        // MANDATORY CHECK: Make feedbackDiv visible
        feedbackDiv.style.display = "block";

        if (isValid) {
            // SUCCESS STATE

            // Set text content to success message
            feedbackDiv.textContent = "Registration successful!";

            // Set color to the required success color: #28a745
            feedbackDiv.style.color = "#28a745";

            // Also update background color for better visibility (not explicitly required, but good practice)
            feedbackDiv.style.backgroundColor = "#d4edda";

            // Clear the form inputs after success
            form.reset();
        } else {
            // FAILURE STATE

            // MANDATORY CHECK: Join messages with <br> and assign to innerHTML
            // innerHTML is used because <br> is an HTML tag
            feedbackDiv.innerHTML = messages.join('<br>');

            // MANDATORY CHECK: Set color to the required failure color: #dc3545
            feedbackDiv.style.color = "#dc3545";

            // Restore the error background (which should match the style.css default)
            feedbackDiv.style.backgroundColor = "#ffbaba";
        }
    }
});