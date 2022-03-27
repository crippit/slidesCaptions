chrome.runtime.onInstalled.addListener(({ reason, version }) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    showReadme();
  }
});

chrome.runtime.onStartup.addListener(async () => {
  loadStyles();
}) 

chrome.action.onClicked.addListener(async (tab) => {
  console.log('tab', tab);
  const title = await chrome.action.getTitle({tabId: tab.id});
  const css = await loadStyles();
  if (title === 'Click to enable large captions') {
    chrome.scripting.insertCSS(
      {
        target: {tabId: tab.id},
        css: css,
      });
    chrome.action.setTitle({tabId: tab.id, title: 'Large captions are enabled'});
    chrome.action.setBadgeText({text: ('ON')});
    chrome.action.setBadgeBackgroundColor({color: 'green'});
  } 
  else {
    //Remove the injected CSS
    chrome.scripting.insertCSS(
      {
        target: {tabId: tab.id},
        files: ['styles.css'],
      });
    chrome.action.setTitle({tabId: tab.id, title: 'Click to enable large captions'});
    chrome.action.setBadgeText({text: ('')});
    chrome.action.setBadgeBackgroundColor({color: 'red'});
  }
});

function showReadme(info, tab) {
  let url = chrome.runtime.getURL("readme.html");
  chrome.tabs.create({ url });
}

const styles = {
  fontSize: 'xxx-large',
  fontColor: '#FFFFF',
  backgroundColor: '#000000',
  fontFamily: 'sans-serif',
  lineHeight: '100'
}

const loadStyles = async() => {
  const data = await chrome.storage.sync.get('optionsKeys');
  console.log('optionsKeys', data.optionsKeys);
  if (data.optionsKeys) {
    const savedPrefs = await chrome.storage.sync.get(JSON.parse(data.optionsKeys));
    Object.assign(styles, savedPrefs);
  }
  return `@import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');\
          .captions-overlay-content { \
              --captions-num-lines: 6 !important; \
              --captions-font-size: ${styles.fontSize} !important;\
              color: ${styles.fontColor};\
              font-family: '${styles.fontFamily}' !important;\
              line-height: ${styles.lineHeight}% !important;\
          }\
          \
          .punch-viewer-container,\
          .punch-viewer-content { \
              background: ${styles.backgroundColor} !important;\
          }\
\
          .punch-viewer-captions-viewer-height-consumer {\
              height: 100% !important;\
              width: 90% !important;\
              margin: auto;\
              top: 0 !important;\
              bottom: 0 !important;\
              left: 0 !important;\
              right: 0 !important;\
          }\
\
          .punch-viewer-page-wrapper-container {\
              height: 0 !important;\
              width: 0 !important;\
          }`;
}