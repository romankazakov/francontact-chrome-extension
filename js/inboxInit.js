InboxSDK.load(2, 'francontact').then(function(sdk){
    sdk.Conversations.registerMessageViewHandler(function(messageView){
        let sender = messageView.getSender();
        chrome.runtime.sendMessage('',
                {'from' : sender.emailAddress, 'to' : sdk.User.getEmailAddress() }
        );
    });
});
