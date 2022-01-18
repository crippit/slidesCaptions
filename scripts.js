function injectCSS() {

    chrome.storage.local.get(['size'], function(result) {
        console.log('Value currently is ' + result.size);
      });
const css = '.Mz6pEf {font-size: '+chosenSize+'pt !important;}';
const tabId = getTabId();
chrome.scripting.insertCSS(
    {
      target: {tabId: tabId},
      css: css,
    },
    () => { ... });
          
}
