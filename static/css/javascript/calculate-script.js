document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.getElementById("calculate");
  submitButton.addEventListener("click", handleSubmitButtonClick);
});

function handleSubmitButtonClick() {
  var personFields = document.getElementsByClassName("person-field");
  var personCount = personFields.length;

  var personArray = Array.from(personFields);
  console.log(personArray);

  var peopleData = [];
  personArray.forEach(function (person) {
    var nameInput = person.querySelector("input[type='text']");
    var percentageInput = person.querySelector("input[type='number']");
    var name = nameInput.value;
    var percentage = percentageInput.value;

    if (name === "" || percentage === "") {
      // Empty input detected, set isValid flag to false
      isValid = false;
      // Optionally, you can also add visual cues to indicate the error to the user
      if (name === ""){
        nameInput.classList.add("error"); // Add a CSS class for error styling
      }
      if (percentage === "") {
        percentageInput.classList.add("error"); // Add a CSS class for error styling
      }
    } else {
      var personData = {
        name: name,
        percentage: percentage,
      };
      isValid = true;
      peopleData.push(personData);
      //remove the classes after user actually inputs data
      nameInput.classList.remove("error"); 
      percentageInput.classList.remove("error"); 
    }

  });

  if (isValid) {
    console.log(peopleData);

    window.location.href = "/result";
  } else {
    var heroDiv = document.getElementById("hero");
    var errorLabel = document.getElementById("submit-error-button");
    if (!errorLabel) {
      errorLabel = document.createElement("label");
      errorLabel.textContent = "Please fill in all required fields.";
      errorLabel.classList.add("submitError");
      errorLabel.id = "submit-error-button";
      heroDiv.appendChild(errorLabel);
    }
  }
}