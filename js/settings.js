class Settings {

    getUserDomain(){
        let userDomain = localStorage.getItem('store.settings.userdomain');
        return userDomain === null ? '' : userDomain.replace(/"/g,'');
    }

    setFromAndTo(fromto){
        localStorage.setItem('store.settings.fromTo',fromto);
    }

    getFromAndTo(){
        let fromTo = localStorage.getItem('store.settings.fromTo');
        return fromTo !== null && fromTo.length > 1 ? JSON.parse(fromTo) : null;
    }
}