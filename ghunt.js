import * as co from "./lib/constants.js"


(function() {
    async function main() {
        var tabs = await chrome.tabs.query({"url": co.CONNECTED_URL_PATTERN})
        if (tabs.length > 0) {
            var target_tab = tabs[0];
            await chrome.tabs.update(target_tab.id, {"active": true, "url": co.START_LOGIN_URL})
        } else {
            await chrome.tabs.create({
                "url": co.START_LOGIN_URL
            });
        }
    }

    document.addEventListener("click", function(e) {
        if (e.target.id == "start_sync") {
            main();
        };
    });

}());
