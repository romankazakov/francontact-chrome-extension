$(document).ready(function() {
    let user = new User('dev');

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


