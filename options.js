const options = {};

document.addEventListener('DOMContentLoaded', () => {
  // Populate the form with the values loaded from storage
  const inputElements = optionsForm.elements;
  const keys = Array.from(inputElements).map((el) => el.id);
  chrome.storage.sync.set('optionsKeys', JSON.stringify(keys));
  chrome.storage.sync.get(keys, (data) => {
    Object.entries(data).forEach(([key, value]) => inputElements[key].value = value);
  });
});

optionsForm.addEventListener('change', (event) => {
  const key = event.target.id;
  const value = event.target.value;
  console.log('change', key, value);
  saveOption(key, value);
});

// Keys are either 'fontSize', 'fontColor', or 'fontType'
const saveOption = async (key, value) => {
  console.log('saveOption', key, value);
  chrome.storage.sync.set({[key]: value}, () => {
    console.log(`set ${key} to ${value}`);
  });
}