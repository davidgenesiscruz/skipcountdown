chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    const url = changeInfo.url;

    if (/netflix\.com/.test(url)) {
        chrome.tabs.executeScript(tabId, { file: "contentscript/netflix.js" });
    } else if (/amazon\.co\.jp/.test(url)) {
        chrome.tabs.executeScript(tabId, { file: "contentscript/amazon.js" });
    }
});
