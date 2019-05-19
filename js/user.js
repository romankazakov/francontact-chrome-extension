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
        $('#appTab').show();
    }

    hideTabs(){
        $('#appTab').hide();
    }


}