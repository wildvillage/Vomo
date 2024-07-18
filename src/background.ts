chrome.runtime.onInstalled.addListener(() => {
  console.log("Vomo installed");

  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          // @ts-expect-error
          type: "modifyHeaders",
          responseHeaders: [
            // @ts-expect-error
            { header: "X-Modified", operation: "set", value: "true" },
          ],
        },
        // @ts-expect-error
        condition: { urlFilter: "*", resourceTypes: ["main_frame"] },
      },
    ],
    removeRuleIds: [1],
  });
});
