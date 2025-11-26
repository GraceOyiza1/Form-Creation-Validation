// fetch-data.js

// ------------------------------------------
// Part 1: Asynchronous Data Fetching Function
// ------------------------------------------

// 1. Initialize the Async Function
async function fetchUserData() {
    // 2. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // 4. Fetch Data Using try-catch
    try {
        // Use await to wait for the network response
        const response = await fetch(apiUrl);

        // Check if the response was successful (e.g., status 200)
        if (!response.ok) {
            // Throw an error if the status is not OK (e.g., 404, 500)
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert the response to JSON data
        const users = await response.json();

        // 5. Clear the Loading Message
        dataContainer.innerHTML = '';

        // 6. Create and Append User List
        const userList = document.createElement('ul');

        // Loop through the users array
        users.forEach(user => {
            const listItem = document.createElement('li');

            // Set the text content to the user's name
            listItem.textContent = user.name;

            // Append the list item to the <ul>
            userList.appendChild(listItem);
        });

        // Append the completed <ul> to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Error Handling: Run this block if any error occurs (network or response issue)
        console.error('There was a problem with the fetch operation:', error);

        // Clear the existing content (loading message)
        dataContainer.innerHTML = '';

        // Display the error message to the user
        dataContainer.textContent = 'Failed to load user data.';
    }
}


// ------------------------------------------
// Part 2: Invoke Function on DOMContentLoaded
// ------------------------------------------

// Add an event listener to ensure the HTML is loaded before fetching data
document.addEventListener('DOMContentLoaded', function () {
    // Invoke fetchUserData to start the process
    fetchUserData();
});