$(document).ready(function() {

    $('#settings').click(function () {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        } else {
            window.open(chrome.runtime.getURL('options.html'));
        }
    });

    let user = new User('dev');
    $('#link2app').attr('href', user.isUserDomainSetup() ? user.getFullUserDomain() : '#' );
    console.log(user.getFullUserDomain());

    let name = 'em_acp_globalauth_cookie';

    $('#link2click').click(function(){
        console.log('click');
        let pro = new Promise(function (resolve, reject) {
            chrome.cookies.get({"url": user.getFullUserDomain(), "name": name}, function(cookie) {
                console.log('cookie');
                console.log(cookie);

                if("value" in cookie && cookie.value) {
                    resolve(cookie.value);
                } else {
                    reject();
                }
            });
        });

        pro.then(function(value){
            let instance = axios.create({
                timeout: 1000,
                withCredentials: true,
                mode: 'no-cors',
                headers: {
                    'Cookie':'em_acp_globalauth_cookie='+value,
                    'Access-Control-Allow-Origin': '*',
                }
            });
            return instance.get( user.getLoginCheckUrl() );
        },function(){
            user.hideTabs();
        }).then(function(response){
            'ok' == response.data ? user.displayTabs() : user.hideTabs();
        },function (){
            user.hideTabs();
        });

        return false;
    });

});


