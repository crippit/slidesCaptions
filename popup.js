window.addEventListener('DOMContentLoaded', function() {
  // your button here
  var link = document.getElementById('disable');
  // onClick's logic below:
  link.addEventListener('click', function() {
      var newURL = "chrome://extensions/";
      chrome.tabs.create({ url: newURL });
  });
});



chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});