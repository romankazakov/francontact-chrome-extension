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