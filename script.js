// script.js

// 1. Wait for the entire HTML document to load before running JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // 2. Select the necessary elements using their IDs (DOM Manipulation)
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 3. Listen for the 'submit' event (when the Register button is clicked)
    form.addEventListener('submit', function (event) {

        // CRITICAL STEP: Stop the form from submitting and refreshing the page
        event.preventDefault();

        // Run the main function that checks all the inputs
        validateForm();
    });

    function validateForm() {

        // 4. Retrieve and trim the user input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // 5. Initialize tracking variables
        let isValid = true;
        const messages = [];

        // --- Validation Checks (Conditions) ---

        // A. Username Check (must be 3 or more characters)
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // B. Email Check (must contain '@' and '.')
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must contain '@' and '.').");
        }

        // C. Password Check (must be 8 or more characters)
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // --- Displaying Feedback ---

        feedbackDiv.style.display = "block"; // Make the red/green box visible

        if (isValid) {
            // Success State
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.backgroundColor = "#d4edda"; // Light green
            feedbackDiv.style.color = "#155724"; // Dark green

            // Clear the form inputs after success
            form.reset();
        } else {
            // Failure State
            // Combine all error messages with line breaks (<br>)
            feedbackDiv.innerHTML = messages.join('<br>');

            // The red background and text color are set by your style.css, but we'll ensure the colors are error-appropriate here too:
            feedbackDiv.style.backgroundColor = "#ffbaba"; // Light red
            feedbackDiv.style.color = "#d8000c"; // Dark red
        }
    }
});