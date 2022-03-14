window.addEventListener('DOMContentLoaded', function() {
  // your button here
  var link = document.getElementById('disable');
  // onClick's logic below:
  link.addEventListener('click', function() {
      var newURL = "chrome://extensions/";
      chrome.tabs.create({ url: newURL });
  });
});