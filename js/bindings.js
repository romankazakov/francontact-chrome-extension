$(document).ready(function() {
    let setting = new Settings();

    let user = new User(
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

    $('.account_url').attr('href', user.getLogInUrl() );

    $('#tasksFrame').attr('src',user.getTaskTabUrl() );

    $('#contactsFrame').attr('src', user.getContactsTabUrl() );

    user.checkUserLogedIn();
});


