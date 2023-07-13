document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var encodedData = urlParams.get("data");
    if (encodedData) {
      var data = JSON.parse(decodeURIComponent(encodedData));
      displayResults(data);
    }
  });

  function displayResults(data) {
    var resultContainer = document.getElementById("result-container");
    if (resultContainer) {
      resultContainer.innerHTML = "";

      data.forEach(function (person) {
        var personElement = document.createElement("p");
        personElement.textContent =
          person.name + " pays " + person.percentage + "% which amounts to $" + (parseFloat(person.percentage / 100) * parseFloat(sessionStorage.getItem("totalExpense"))).toFixed(2) + ".";
        resultContainer.appendChild(personElement);
      });
    }
  }