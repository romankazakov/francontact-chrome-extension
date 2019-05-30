$(document).ready(function() {
    let setting = new Settings();

    var user = new User(
        setting.getUserDomain()
    );

    $('#settings').click(function () {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        } else {
            window.open(chrome.runtime.getURL('options.html'));
        }
    });

    $('.account_url').click(function (){
        window.location.url = user.getLogInUrl();
    });

    $('#link2app').attr('href', user.isUserDomainSetup() ? user.getFullUserDomain() : '#' );

    if (user.isUserDomainSetup()) {
        $('.setupdomain').hide();
    } else {
        $('.setupdomain').show();
    }

    $('.account_url').attr('href', user.getLogInUrl() );

    $('#tasksFrame').attr('src',user.getTaskTabUrl() );


    let fromTo = setting.getFromAndTo();

    let additionalGmailString = fromTo !== null ? user.getSenderRecipient(fromTo.from , fromTo.to) : '';

    $('#contactsFrame').attr('src', user.getContactsTabUrl() + additionalGmailString );
    user.checkUserLogedIn();
});


