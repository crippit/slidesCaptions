const options = {};

optionsForm.fontSize.addEventListener('change', (event) => {
  options.fontSize = event.target.value;
  chrome.storage.sync.set({options});
});



// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
chrome.storage.sync.get('options', (data) => {
    Object.assign(options, data.options);
    optionsForm.fontSize.value = options.fontSize;;
});