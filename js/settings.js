class Settings {

    getUserDomain(){
        let userDomain = localStorage.getItem('store.settings.userdomain');
        return userDomain === null ? '' : userDomain.replace(/"/g,'');
    }
}