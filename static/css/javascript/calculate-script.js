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

    var personData = {
      name: name,
      percentage: percentage,
    };

    peopleData.push(personData);
  });

  console.log(peopleData);
}
