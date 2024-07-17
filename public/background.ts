chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");

  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: "modifyHeaders",
          responseHeaders: [
            { header: "X-Modified", operation: "set", value: "true" },
          ],
        },
        condition: { urlFilter: "*", resourceTypes: ["main_frame"] },
      },
    ],
    removeRuleIds: [1],
  });
});
