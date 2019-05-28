chrome.runtime.onInstalled.addListener(function() {
      chrome.contextMenus.create({
        id: 'FranContactContextMenu',
        title: 'FranContact',
        type: 'normal',
        contexts: ["page"],
        visible:true
      }, function(){}
      );
});

chrome.tabs.onCreated.addListener(function(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        console.log(
            window.gmail.get.current_page()
        );
    });
});