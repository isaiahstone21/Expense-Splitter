function handleCalculateButtonClick() {
  var totalExpenseInput = document.getElementById("total-expense-box");
  var totalExpense = totalExpenseInput.value;

  var personFields = document.getElementsByClassName("person-field");
  var personArray = Array.from(personFields);

  var peopleData = [];
  var isValid = true;
  var percentageSum = 0;
  var nameInputFlag = false;

  if (totalExpense === "" || isNaN(parseFloat(totalExpense))) {
    isValid = false;
    totalExpenseInput.classList.add("error");
  } else {
    totalExpenseInput.classList.remove("error");
  }
  if (totalExpense <= 0) {
    isValid = false;
    totalExpenseInput.classList.add("error");
  } else {
    totalExpenseInput.classList.remove("error");
  }


  personArray.forEach(function (person) {
    var nameInput = person.querySelector("input[type='text']");
    var percentageInput = person.querySelector("input[type='number']");
    var name = nameInput.value;
    var percentage = percentageInput.value;
    percentageSum += parseFloat(percentage);

    if (name === "" || percentage === "") {
      isValid = false;
      if (name === "") {
        nameInput.classList.add("error");
        nameInputFlag = true;
      }
      if (percentage === "") {
        percentageInput.classList.add("error");
      }
    } else {
      var personData = {
        name: name,
        percentage: percentage,
      };
      peopleData.push(personData);

      nameInput.classList.remove("error");
      percentageInput.classList.remove("error");
    }
  });

  if (percentageSum !== 100.0){
    isValid = false;
  }

  if (isValid) {
    var encodedData = encodeURIComponent(JSON.stringify(peopleData));
    window.location.href = "/result?data=" + encodedData;
  } else {
    var heroDiv = document.getElementById("hero");
    var errorLabel = document.getElementById("submit-error-button");
    if (!errorLabel) {
      errorLabel = document.createElement("label");
      if (nameInputFlag){
        errorLabel.textContent = "Please fill in all required fields.";
      } else if (percentageSum !== 100.0){
        errorLabel.textContent = "Please make sure percentages adds up to 100.";
      }
      errorLabel.classList.add("submitError");
      errorLabel.id = "submit-error-button";
      heroDiv.appendChild(errorLabel);
    } else {
      if (nameInputFlag){
        errorLabel.textContent = "Please fill in all required fields.";
      } else if (percentageSum !== 100.0){
        errorLabel.textContent = "Please make sure percentages adds up to 100.";
      }
      errorLabel.classList.add("submitError");
      errorLabel.id = "submit-error-button";
      heroDiv.appendChild(errorLabel);
    }
  }
}
