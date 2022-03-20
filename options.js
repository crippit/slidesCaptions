function save_options() {
  var fontSize = document.getElementById('font-size').value;
  var fontColor = document.getElementById('font-color').value;
  var fontType = document.getElementById('font').value;
  chrome.storage.sync.set({
    fontSize: fontSize,
    fontColor: fontColor,
    fontType: fontType
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    fontColor: 'white',
    fontSize: 'medium',
    fontType: 'Sans-serif'
  }, function(items) {
    document.getElementById('font-color').value = items.fontColor;
    document.getElementById('font-size').value = items.fontSize;
    document.getElementById('font').value = items.fontType;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);