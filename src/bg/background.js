chrome.runtime.onInstalled.addListener(function() {
      chrome.contextMenus.create({
        id: 'FranContactContextMenu',
        title: 'FranContact',
        type: 'normal',
        contexts: ["page"],
        visible:true
      }, function(){
      	console.log('Some string !!!');
      });
});

chrome.tabs.onCreated.addListener(function(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        console.log(
            window.gmail.get.current_page()
        );
    });
});