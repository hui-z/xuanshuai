~(function() {
    'use strict';

    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.insertCSS(null, {file: 'inject.css'});

        let inject = document.getElementById('inject');
        chrome.tabs.executeScript(null, {file: 'inject.js'});
    });

})();
