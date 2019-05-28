alert('in');
InboxSDK.load(2, 'francontact').then(sdk => {
    alert('loaded');
    sdk.Conversations.registerMessageViewHandler(function(messageView){
        var sender = messageView.getSender();

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            alert('Tabs!');
            var currTab = tabs[0];
            if (currTab) { // Sanity check
                alert(currTab + ' ' + sender.emailAddress);
            }
        });
        // {emailAddress:'some@email.com', name: 'Some Name'}
    });
});
