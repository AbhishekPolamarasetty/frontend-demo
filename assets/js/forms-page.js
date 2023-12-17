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
  }
  
  // Your existing functionality
  $(".btn-forget").on("click", function (e) {
    e.preventDefault();
    var inputField = $(this).closest("form").find("input");
    if (inputField.attr("required") && inputField.val()) {
      $(".error-message").remove();
      $(".form-items", ".form-content").addClass("hide-it");
      $(".form-sent", ".form-content").addClass("show-it");
    } else {
      $(".error-message").remove();
      $(
        '<small class="error-message">Please fill the field.</small>'
      ).insertAfter(inputField);
    }
  });

  $(".btn-tab-next").on("click", function (e) {
    e.preventDefault();
    $(".nav-tabs .nav-item > .active")
      .parent()
      .next("li")
      .find("a")
      .trigger("click");
  });

  $('.custom-file input[type="file"]').on("change", function () {
    var filename = $(this).val().split("\\").pop();
    $(this).next().text(filename);
  });
});
$(document).ready(function () {
  $("#submit").click(function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Perform form validation here
    var isValid = true;

    // Check each required input
    $('input[required]').each(function () {
      if (!$(this).val()) {
        isValid = false;
        return false; // Exit the loop early if a required field is empty
      }
    });

    if (isValid) {
      // All required fields are filled, proceed to show the modal
      Swal.fire({
        title: "Posted",
        text: "Post added successfully",
        // imageUrl: "https://unsplash.it/400/200",
        imageUrl: "./assets/images/back.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to "getstarted.html" after clicking OK
          window.location.href = "getstarted.html";
        }
      });
    } else {
      // If any required field is empty, alert the user
      Swal.fire({
              position: "center",
              title: "Missing fields",
              icon: "warning",
              text: "Please fill all the fields",
              confirmButtonText: "OK",
            });
    }
  });
});
