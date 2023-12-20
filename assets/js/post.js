// script.js

// Function to fetch data
function fetchData() {
    // Replace 'your_api_endpoint' with your API endpoint or file path
    fetch('http://127.0.0.1:8000/post/postAPI/?format=json')
        .then(response => response.json())
        .then(data => {
            // Get the container to display data
            const dataContainer = document.getElementById('dataContainer');

            // Process fetched data and add it to the HTML
            data.forEach(item => {
                const dataElement = document.createElement('p');
                dataElement.textContent = item; // Replace with your data structure
                dataContainer.appendChild(dataElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the fetchData function when the page loads
window.onload = fetchData;
