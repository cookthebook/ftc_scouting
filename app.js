var emtpy_home = '<button type="button" class="btn btn-secondary" id="CreateNewSheet">\
  Create new sheet\
</button>';

var new_sheet = '<form class="ScoutingSheet">\
  <div class="form-group">\
    <label for="teamNumber">Team Number</label>\
    <input type="number" id="teamNumber" placeholder="Enter team number">\
  </div>\
  <div class="form-group">\
    <label for="teamName">Team Name</label>\
    <input type="text" id="teamName" placeholder="Enter team name">\
  </div>\
  <div class="dropdown">\
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="addNewFieldLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
      Add New...\
    </a>\
    <div class="dropdown-menu" aria-labelledby="addNewFieldLink">\
      <a class="dropdown-item" href="#" id="addNewTrueFalseField">True/False Field</a>\
      <a class="dropdown-item" href="#" id="addNewNumberField">Number Field</a>\
      <a class="dropdown-item" href="#" id="addNewTextField">Text Field</a>\
    </div>\
  </div>\
</form>';

var content = document.getElementById('content');
if (content.innerHTML === '') {
  content.innerHTML = emtpy_home;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

var newSheetButton = document.getElementById('CreateNewSheet');
var addTextFieldButton;
var addTrueFalseFieldButton;
var addNumberFieldButton;
newSheetButton.addEventListener('click', function (e) {
  content.innerHTML = new_sheet;
  addTextFieldButton = document.getElementById('addNewTextField');
  addTrueFalseFieldButton = document.getElementById('addNewTrueFalseField');
  addNumberFieldButton = document.getElementById('addNewNumberField');
});
