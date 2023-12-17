"use strict";

$(document).ready(function () {
  const url =
    "https://raw.githubusercontent.com/ashhadulislam/JSON-Airports-India/master/airports.json";

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
  