var emtpy_home = '<button type="button" class="btn btn-secondary">\
  Create new sheet\
  </button>';

var content = document.getElementById('content');
if (content.innerHTML === '') {
  content.innerHTML = emtpy_home;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
