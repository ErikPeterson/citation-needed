var onUpdated = function(tabId, changeInfo, tab){
	if(!changeInfo.url) return;
	crome.tabs.insertCSS(tabId, {file: 'css/annotations.css', runAt: 'document_idle'})
	chrome.tabs.executeScript(tabId, {file: 'js/fetchAnnotations.js', runAt: 'document_idle'})
};

chrome.tabs.onUpdated.addListener(onUpdated);