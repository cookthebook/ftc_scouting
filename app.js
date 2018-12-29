const emtpy_home = '\
<button type="button" class="btn btn-secondary ScoutingSheet" id="CreateNewSheet">\
  Create new sheet\
</button>';

const new_sheet = '\
<form class="ScoutingSheet">\
  <div class="form-group">\
    <label for="teamNumber">Team Number</label>\
    <input type="number" id="teamNumber" placeholder="Enter team number">\
  </div>\
  <div class="form-group">\
    <label for="teamName">Team Name</label>\
    <input type="text" id="teamName" placeholder="Enter team name">\
  </div>\
\
  <button class="btn btn-primary" type="button" id="addNewFieldLink" data-toggle="collapse" data-target="#addFieldButtons" aria-expanded="false" aria-controls="addFieldButtons">\
    Add New...\
  </button>\
\
  <div class="collapse" id="addFieldButtons">\
    <button class="btn btn-secondary" data-toggle="collapse" data-target="#trueFalseCollapse" role="button" aria-expanded="false" aria-controls="trueFalseCollapse" id="addNewTrueFalseButton">\
      True/False Field\
    </button>\
    <div class="collapse" id="trueFalseCollapse">\
      <div class="form-group">\
        <label for="newTrueFalse">New Field Name</label>\
        <input type="text" id="newTrueFalse" placeholder="Enter field name">\
      </div>\
    </div>\
    <br />\
    <button class="btn btn-secondary" data-toggle="collapse" data-target="#numberCollapse" role="button" aria-expanded="false" aria-controls="numberCollapse" id="addNewNumberButton">\
      Number Field\
    </button>\
    <div class="collapse" id="numberCollapse">\
      <div class="form-group">\
        <label for="newNumberField">New Field Name</label>\
        <input type="text" id="newNumberField" placeholder="Enter field name">\
      </div>\
    </div>\
  </div>\
\
</form>';

const new_field_form = '\
'

var content = document.getElementById('content');
if (content.innerHTML === '') {
  content.innerHTML = emtpy_home;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

var newSheetButton = document.getElementById('CreateNewSheet');

newSheetButton.addEventListener('click', function (e) {
  content.innerHTML = new_sheet;
});
