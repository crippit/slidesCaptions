chrome.action.onClicked.addListener(async (tab) => {
  console.log('tab', tab);
  const title = await chrome.action.getTitle({tabId: tab.id});
  if (title === 'Click to enable large captions') {
    chrome.scripting.insertCSS(
      {
        target: {tabId: tab.id},
        files: ["./styles.css"],
      });
    chrome.action.setTitle({tabId: tab.id, title: 'Large captions are enabled'});
    chrome.action.setBadgeText({text: ('ON')});
    chrome.action.setBadgeBackgroundColor({color: 'green'});
  } 
  else {
    chrome.scripting.removeCSS(
      {
        target: {tabId: tab.id},
        files: ["./styles.css"],
      });
    chrome.action.setTitle({tabId: tab.id, title: 'Click to enable large captions'});
    chrome.action.setBadgeText({text: (' ')});
    chrome.action.setBadgeBackgroundColor({color: 'red'});
  }
});