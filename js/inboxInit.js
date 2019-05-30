InboxSDK.load(2, 'sdk_francontact_67f296e2a5').then(function(sdk){
    sdk.Conversations.registerMessageViewHandler(function(messageView){
        let sender = messageView.getSender();
        chrome.runtime.sendMessage('',
                {'msgType': 'gmail', 'from' : sender.emailAddress, 'to' : sdk.User.getEmailAddress() }
        );
    });
});
