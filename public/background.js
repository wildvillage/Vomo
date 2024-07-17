chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Modify the response here
    return { cancel: false };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);