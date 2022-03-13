function injectCSS() {

const tabId = getTabId();
chrome.scripting.insertCSS(
    {
      target: {tabId: tabId},
      files: ["./styles.css"],
    },);
          
}
