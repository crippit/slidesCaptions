const css = 'body { background-color: red; }';
const tabId = getTabId();
chrome.scripting.insertCSS(
    {
      target: {tabId: tabId},
      css: css,
    },
    () => { ... });
