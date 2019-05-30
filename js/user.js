class User {

    constructor(domain){
        this.domain = domain;
    }

    getUserDomain(){
        return this.domain;
    }

    isUserDomainSetup(){
        return "" != this.getUserDomain();
    }

    getFullUserDomain(){
        return `https://${this.getUserDomain().toLowerCase()}.francontact.com`;
    }

    getLoginCheckUrl(){
        return `https://${this.getUserDomain().toLowerCase()}.francontact.com/admin/api.php?f=user!ac_user_return_ok&p[]=json&api_output=json`;
    }

    displayTabs(){
        $('#tasksFrame').show();
        $('#contactsFrame').show();
        $('.pleaselogin').hide();
    }

    hideTabs(){
        $('#tasksFrame').hide();
        $('#contactsFrame').hide();
        $('.pleaselogin').show();
    }

    getLogInUrl(){
        return `https://${this.getUserDomain().toLowerCase()}.francontact.com/admin/`;
    }

    getTaskTabUrl(){
        return `https://${this.getUserDomain().toLowerCase()}.francontact.com/admin/main.php?action=ws_task&view-type=plugin#mainpage`;
    }

    getContactsTabUrl(){
        return `https://${this.getUserDomain().toLowerCase()}.francontact.com/admin/main.php?action=subscriber&view-type=plugin#list`;
    }

    getContactsTabUrl(){
        return `https://${this.getUserDomain().toLowerCase()}.francontact.com/admin/main.php?action=subscriber&view-type=plugin#list`;
    }

    getSenderRecipient(from, to){
        return encodeURI(`&sender=${from}&recipient=${to}`);
    }

    checkUserLogedIn(){
        let user = this;
        let pro = new Promise(function (resolve, reject) {
            chrome.cookies.get({"url": user.getFullUserDomain(), "name": 'em_acp_globalauth_cookie'}, function(cookie) {
                if(cookie !== undefined && cookie !== null && "value" in cookie && cookie.value) {
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
                    //'Set-Cookie':'em_acp_globalauth_cookie='+value,
                    'Access-Control-Allow-Origin': '*',
                    //'Access-Control-Allow-Credentials':true
                }
            });
            return instance.get( user.getLoginCheckUrl() );
        },function(){
            //no cookie
            user.hideTabs();
        }).then(function(response){
            //ok user is loged in
            'ok' == response.data ? user.displayTabs() : user.hideTabs();
        },function (){
            //wrong request
            user.hideTabs();
        });

    }
}