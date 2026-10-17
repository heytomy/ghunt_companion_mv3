import * as utils from "../lib/utils.js"
import * as co from "../lib/constants.js"


async function isConnected(response) {
    console.log("Connected url pattern detected, checking...");
    var auth_data = await utils.checkSession(response);
    if (auth_data.is_connected) {
        var tabs = await chrome.tabs.query({"url": co.CONNECTED_URL_PATTERN});
        if (tabs.length > 0) {
            var target_tab = tabs[0];
            await chrome.tabs.update(target_tab.id, {"active": true, "url": chrome.runtime.getURL(co.CONNECTED_LOCAL_PAGE)});
        };
    };

}

chrome.webRequest.onCompleted.addListener(
    isConnected,
    {urls: [co.CONNECTED_URL_PATTERN]}
);
