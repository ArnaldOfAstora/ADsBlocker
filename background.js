const DefFilters = [	
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.exads.com/*",
    "*://*.kevel.com*",
    "*://*.hitapps.com/*",
    "*://*.adlane.info/*",
    "https://iozo.com/password",
    ]
    
    
chrome.webRequest.onBeforeRequest.addListener(
    function(details){return{cancel:true}},
    {urls: DefFilters },
    ["blocking"]
);
