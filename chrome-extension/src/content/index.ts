console.log('Content script loaded')

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      console.log('DOM changed')
    }
  })
})

observer.observe(document.body, {
  childList: true,
  subtree: true
})

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  console.log('Message received in content script:', request)
  sendResponse({ success: true })
})