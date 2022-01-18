function injectCSS() {

    chrome.storage.local.get(['key'], function(result) {
        console.log('Value currently is ' + result.key);
        var chosenSize = result.key;
      });
const css = '.Mz6pEf {font-size: ' + chosenSize + 'pt !important;}';
const tabId = getTabId();
chrome.scripting.insertCSS(
    {
      target: {tabId: tabId},
      css: css,
    },
    () => { ... });
          
}
