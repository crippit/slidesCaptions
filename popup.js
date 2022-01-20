document.addEventListener("DOMContentLoaded", changeSize, false);



function changeSize() {
  const clearBtn = document.getElementById("clear");
  const submitBtn = document.getElementById("submit");
  var textSize = document.getElementById("size").value;
  document.getElementById("sizeOutput").innerHTML = textSize;
  chrome.storage.local.set({key: textSize}, function() {
  console.log('Value is set to ' + textSize);
});
  submitBtn.addEventListener("click", () => {
    const css = '.Mz6pEf {font-size: ' + textSize + 'pt !important;}';
    const tabId = getTabId();
    chrome.scripting.insertCSS(
    {
      target: {tabId: tabId},
      css: css,
    },
    () => { ... });
    });

   

  clearBtn.addEventListener("click", () => {
    });
}
