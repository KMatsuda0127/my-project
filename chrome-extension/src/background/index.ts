chrome.runtime.onInstalled.addListener(() => {
  console.log('Chrome extension installed')
})

chrome.action.onClicked.addListener((tab) => {
  console.log('Extension icon clicked', tab)
})

chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log('Tab updated:', tab.url)
  }
})