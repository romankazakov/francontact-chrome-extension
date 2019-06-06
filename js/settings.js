class Settings {
    getUserDomain(){
        let userDomain = localStorage.getItem('store.settings.userdomain');
        return userDomain === null ? '' : userDomain.replace(/"/g,'');
    }

    setFromAndTo(fromto){
        localStorage.setItem('user.settings.fromTo',fromto);
    }

    getFromAndTo(){
        let fromTo = localStorage.getItem('user.settings.fromTo');
        return fromTo !== null && fromTo.length > 1 ? JSON.parse(fromTo) : null;
    }

    getLang(){
        let lang = localStorage.getItem('store.settings.lang');
        return lang === null ? 'en' : lang.replace(/"/g,'');
    }
}