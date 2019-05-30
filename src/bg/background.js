chrome.runtime.onInstalled.addListener(function() {
      chrome.contextMenus.create({
        id: 'FranContactContextMenu',
        title: 'FranContact',
        type: 'normal',
        contexts: ["page"],
        visible:true
      }, function(){

        }
      );
});

chrome.tabs.onActivated.addListener(function( activeInfo ){
   let emailValues = new Values();
   emailValues.loadValues();

   let settings = new Settings();

   settings.setFromAndTo(
       JSON.stringify( emailValues.getByTab( activeInfo.tabId ) )
   );
});

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
    let emailValues = new Values();
    emailValues.loadValues();
    emailValues.removeValue(tabid);
    emailValues.saveValues();
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        let settings = new Settings();
        settings.setFromAndTo( JSON.stringify(request));
        let emailValues = new Values();
        emailValues.loadValues();

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var currTab = tabs[0];
            if (currTab) {
                emailValues.addValue(currTab.id, request);
                emailValues.saveValues();
            }
        });
    }
);