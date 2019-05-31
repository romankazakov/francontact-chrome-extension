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

    setSelectedText(text){
        localStorage.setItem('user.settings.selectedtext', text);
    }

    getSelectedText(){
        localStorage.getItem('user.settings.selectedtext');
    }
}