~(function() {
    'use strict';

    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.insertCSS(null, {file: 'src/inject.css'});

        let inject = document.getElementById('inject');
        chrome.tabs.executeScript(null, {file: 'src/inject.js'});
    });

})();
