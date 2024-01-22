"use strict";

$(document).ready(function () {
  const url =
    "https://raw.githubusercontent.com/ashhadulislam/JSON-Airports-India/master/airports.json";
    // "http://127.0.0.1:8000/post/postAPI/?format=json";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const citiesWithCodes = data.airports.map((airport) => ({
        cityName: airport.city_name,
        IATACode: airport.IATA_code,
      }));

      populateCitiesList(citiesWithCodes, "cityInputFrom", "citiesListFrom");
      populateCitiesList(citiesWithCodes, "cityInputTo", "citiesListTo");
    })
    .catch((error) => {
      console.error("There was a problem fetching the data:", error);
    });

  function populateCitiesList(citiesWithCodes, inputId, dataListId) {
    const datalist = document.createElement("datalist");
    datalist.id = dataListId;

    citiesWithCodes.forEach((city) => {
      const option = document.createElement("option");
      option.value = `${city.cityName} (${city.IATACode})`;
      datalist.appendChild(option);
    });

    const existingDatalist = document.getElementById(dataListId);
    if (existingDatalist) {
      existingDatalist.parentNode.removeChild(existingDatalist);
    }

    document.body.appendChild(datalist);

    const cityInput = document.getElementById(inputId);
    cityInput.setAttribute("list", dataListId);

    cityInput.addEventListener("input", function () {
      const inputText = this.value.toLowerCase();
      const matchingCities = citiesWithCodes.filter(
        (city) =>
          city.cityName.toLowerCase().includes(inputText) ||
          city.IATACode.toLowerCase().includes(inputText)
      );

      showCities(matchingCities, dataListId);
    });

    function showCities(matchingCities, dataListId) {
      const datalist = document.createElement("datalist");
      datalist.id = dataListId;

      matchingCities.forEach((city) => {
        const option = document.createElement("option");
        option.value = `${city.cityName} (${city.IATACode})`;
        datalist.appendChild(option);
      });

      const existingDatalist = document.getElementById(dataListId);
      if (existingDatalist) {
        existingDatalist.parentNode.removeChild(existingDatalist);
      }

      document.body.appendChild(datalist);
      cityInput.setAttribute("list", dataListId);
    }
  }})
  // function rate(stars) {
  //   const starElements = document.querySelectorAll('.star');
  
  //   starElements.forEach((star, index) => {
  //     if (index === stars - 1 && star.classList.contains('clicked')) {
  //       star.classList.remove('clicked'); // Remove the yellow background when clicked twice
  //     } else if (index < stars) {
  //       star.classList.add('clicked');
  //     } else {
  //       star.classList.remove('clicked');
  //     }
  //   });
  // }
  function rate(stars, cardIndex) {
    const cards = document.querySelectorAll('.card');
    const starElements = cards[cardIndex].querySelectorAll('.rating .star');
  
    starElements.forEach((star, index) => {
      if (index === stars - 1 && star.classList.contains('clicked')) {
        star.classList.remove('clicked'); // Remove the yellow background when clicked twice
      } else if (index < stars) {
        star.classList.add('clicked');
      } else {
        star.classList.remove('clicked');
      }
    });
  }
  function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}
  // document.addEventListener('DOMContentLoaded', function() {
  //   const chatButtons = document.querySelectorAll('.chat-btn');
  //   const ratings = document.querySelectorAll('.rating');
  
  //   chatButtons.forEach((button, index) => {
  //     button.addEventListener('click', function() {
  //       ratings[index].style.display = 'block';
  //     });
  //   });
  // });
  // function rate(stars, cardIndex) {
  //   const cards = document.querySelectorAll('.card');
  //   const starElements = cards[cardIndex].querySelectorAll('.rating .star');
  
  //   starElements.forEach((star, index) => {
  //     if (index === stars - 1 && star.classList.contains('clicked')) {
  //       star.classList.remove('clicked'); // Remove the yellow background when clicked twice
  //     } else if (index < stars) {
  //       star.classList.add('clicked');
  //     } else {
  //       star.classList.remove('clicked');
  //     }
  //   });
  // }
  document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    const profile = document.querySelector('.profile');
  
    // Check if the clicked element is not within the menu or profile
    if (!menu.contains(event.target) && !profile.contains(event.target)) {
      menu.classList.remove('active');
    }
  });
  // Function to fetch data from the API
// Function to fetch data from the API
// Creating the elements and structure using JavaScript

// Create container elements
// const container = document.createElement('div');
// container.classList.add('container');

// const row = document.createElement('div');
// row.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'g-3');

// // Create individual columns
// const columnsData = [
//     {
//         iataCodes: ['JFK', 'LHR'],
//         locations: ['bengaluru', '01/24/2024', 'hyderabad'],
//         flightInfo: ['ABC123', 'Tharun'],
//         availableSpace: '5kgs',
//         buttonText: 'Verify PNR',
//         ratingStars: 0,
//     },
//     {
//         iataCodes: ['JFK', 'LHR'],
//         locations: ['bengaluru', '01/24/2024', 'hyderabad'],
//         flightInfo: ['ABC123', 'Tharun'],
//         availableSpace: '5kgs',
//         buttonText: 'Verify PNR',
//         ratingStars: 0,
//     },
//     {
//         iataCodes: ['JFK', 'LHR'],
//         locations: ['bengaluru', '01/24/2024', 'hyderabad'],
//         flightInfo: ['ABC123', 'Tharun'],
//         availableSpace: '5kgs',
//         buttonText: 'Verify PNR',
//         ratingStars: 0,
//     },
// ];

// columnsData.forEach((data, index) => {
//     const col = document.createElement('div');
//     col.classList.add('col');

//     const card = document.createElement('div');
//     card.classList.add('card', 'shadow-sm');

//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');

//     // Constructing the content
//     const content = `
//         <p>
//             <span class="iata-code">${data.iataCodes[0]}</span>
//             <img src="./assets/images/flight.png" alt="Flight Symbol" class="flight-symbol" />
//             <span class="iata-code">${data.iataCodes[1]}</span>
//         </p>
//         <div class="dept">
//             <p>${data.locations[0]}</p>
//             <p>${data.locations[1]}</p>
//             <p>${data.locations[2]}</p>
//         </div>
//         <div class="first">
//             <p>${data.flightInfo[0]}</p>
//             <p>${data.flightInfo[1]}</p>
//         </div>
//         <div class="second">
//             <p>${data.flightInfo[0]}</p>
//             <button type="button" class="btn btn-success" id="verification_${index}">${data.buttonText}</button>
//         </div>
//         <div class="third">
//             <p><b>Available Space: ${data.availableSpace}</b></p>
//         </div>
//         <div class="rating">
//             ${Array.from({ length: 5 }, (_, i) => `<span class="star" onclick="rate(${i + 1},${index})">★</span>`).join('')}
//         </div>
//     `;

//     // Set the constructed content as innerHTML
//     cardBody.innerHTML = content;

//     // Appending elements to their respective parents
//     card.appendChild(cardBody);
//     col.appendChild(card);
//     row.appendChild(col);
// });

// // Append everything to the main container
// container.appendChild(row);

// // Append the container to the document body or another parent element
// document.body.appendChild(container);






// Create container elements
const albumDiv = document.createElement('div');
albumDiv.classList.add('album', 'py-5', 'bg-body-tertiary');

const container = document.createElement('div');
container.classList.add('container');

const row = document.createElement('div');
row.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'g-3');

// Create individual columns
const columnsData = [
    {
        iataCodes: ['JFK', 'LHR'],
        locations: ['bengaluru', '01/24/2024', 'hyderabad'],
        flightInfo: ['ABC123', 'Tharun'],
        availableSpace: '5kgs',
        buttonText: 'Verify PNR',
        ratingStars: 0,
    },
    {
        iataCodes: ['JFK', 'LHR'],
        locations: ['bengaluru', '01/24/2024', 'hyderabad'],
        flightInfo: ['ABC123', 'Tharun'],
        availableSpace: '5kgs',
        buttonText: 'Verify PNR',
        ratingStars: 0,
    },
    {
        iataCodes: ['JFK', 'LHR'],
        locations: ['bengaluru', '01/24/2024', 'hyderabad'],
        flightInfo: ['ABC123', 'Tharun'],
        availableSpace: '5kgs',
        buttonText: 'Verify PNR',
        ratingStars: 0,
    },
];

columnsData.forEach((data, index) => {
    const col = document.createElement('div');
    col.classList.add('col');

    const card = document.createElement('div');
    card.classList.add('card', 'shadow-sm');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Constructing the content
    const content = `
        <p>
            <span class="iata-code">${data.iataCodes[0]}</span>
            <img src="./assets/images/flight.png" alt="Flight Symbol" class="flight-symbol" />
            <span class="iata-code">${data.iataCodes[1]}</span>
        </p>
        <div class="dept">
            <p>${data.locations[0]}</p>
            <p>${data.locations[1]}</p>
            <p>${data.locations[2]}</p>
        </div>
        <div class="first">
            <p>${data.flightInfo[0]}</p>
            <p>${data.flightInfo[1]}</p>
        </div>
        <div class="second">
            <p>${data.flightInfo[0]}</p>
            <button type="button" class="btn btn-success custom-color" id="verification_${index}">${data.buttonText}</button>
        </div>
        <div class="third">
            <p><b>Available Space: ${data.availableSpace}</b></p>
        </div>
        <div class="fourth">
        <button type="button" class="btn btn-success custom-color" id="chat">Chat</button> 
        <div class="rating">
            ${Array.from({ length: 5 }, (_, i) => `<span class="star" onclick="rate(${i + 1},${index})">★</span>`).join('')}
        </div>
        </div>
    `;

    // Set the constructed content as innerHTML
    cardBody.innerHTML = content;

    // Appending elements to their respective parents
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
});

// Append everything to the main container
container.appendChild(row);
albumDiv.appendChild(container);
document.body.appendChild(albumDiv);

// Function to fetch data from the API




// ... (previous code remains unchanged)

// async function fetchData() {
//   try {
//     const response = await fetch('http://127.0.0.1:8000/postAPI/');
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   createCardStructure();
// });
// async function createCardStructure() {
//   try {
//       const columnsData = await fetchData();
//       console.log(columnsData);

//       columnsData.forEach((data, index) => {
//           const col = document.createElement('div');
//           col.classList.add('col');

//           const card = document.createElement('div');
//           card.classList.add('card', 'shadow-sm');

//           const cardBody = document.createElement('div');
//           cardBody.classList.add('card-body');

//           const content = `
//               <p>
//                   <span class="iata-code">${data.source}</span>
//                   <img src="./assets/images/flight.png" alt="Flight Symbol" class="flight-symbol" />
//                   <span class="iata-code">${data.destination}</span>
//               </p>
//               <div class="dept">
//                   <p>${data.source}</p>
//                   <p>${data.date_of_journey}</p>
//                   <p>${data.destination}</p>
//               </div>
//               <div class="first">
//                   <p>${data.flight_number}</p>
//                   <p>${data.passenger_name}</p>
//               </div>
//               <div class="second">
//                   <p>${data.flight_number}</p>
//                   <button type="button" class="btn btn-success" id="verification_${index}">Verify PNR</button>
//               </div>
//               <div class="third">
//                   <p><b>Available Space: ${data.baggage_space}kgs</b></p>
//               </div>
//               <div class="rating">
//                   ${Array.from({ length: 5 }, (_, i) => `<span class="star" onclick="rate(${i + 1},${index})">★</span>`).join('')}
//               </div>
//           `;

//           cardBody.innerHTML = content;
//           card.appendChild(cardBody);
//           col.appendChild(card);
//           row.appendChild(col);
//       });

//       container.appendChild(row);
//       albumDiv.appendChild(container);
//       document.body.appendChild(albumDiv);
//   } catch (error) {
//       console.error('Error creating card structure:', error);
//   }
// }

// createCardStructure();
