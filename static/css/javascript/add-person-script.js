document.addEventListener('DOMContentLoaded', function() {
  var addPersonButton = document.getElementById('add-person-button');
  addPersonButton.addEventListener('click', addPerson);

  //TODO: Implement session storage for people

});

function addPerson() {
  var personFields = document.getElementById('people-fields');
  var personCount = personFields.getElementsByClassName('person-field').length;

  //Creates a div with the person field class for each new person
  var newPersonField = document.createElement('div');
  newPersonField.className = 'person-field';
  
  // Sets the name html values
  var nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name: ';
  var nameInput = document.createElement('input');
  nameInput.className = 'text-input';
  nameInput.type = 'text';
  nameInput.id = 'person-' + (personCount + 1) + '-name';
  
  // Sets the percentage html values 
  var percentageLabel = document.createElement('label');
  percentageLabel.textContent = ' Percentage: ';
  var percentageInput = document.createElement('input');
  percentageInput.className = 'text-input';
  percentageInput.type = 'number';
  percentageInput.id = 'person-' + (personCount + 1) + '-percentage';
  percentageInput.inputmode = 'numeric';
  percentageInput.pattern = '\\d+(\\.\\d{2})?';
  
  //Creates a label for individual total
  var individualTotalLabel = document.createElement('label');
  individualTotalLabel.textContent = ' Individual Total: ';


  var deleteImage = document.createElement('img');
  deleteImage.src = 'static/css/images/x-mark.png';


  newPersonField.appendChild(nameLabel);
  newPersonField.appendChild(nameInput);
  newPersonField.appendChild(percentageLabel);
  newPersonField.appendChild(percentageInput);
  newPersonField.appendChild(individualTotalLabel);
  newPersonField.appendChild(deleteImage);

  personFields.appendChild(newPersonField);

  //This makes sure to insert person before the button
  var addPersonButton = document.getElementById('add-person-button');
  personFields.insertBefore(newPersonField, addPersonButton);

  //TODO: Implement session storage for new person added
}