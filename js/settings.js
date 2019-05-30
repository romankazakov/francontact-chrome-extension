class Settings {

    getUserDomain(){
        let userDomain = localStorage.getItem('francontact.settings.userdomain');
        return userDomain === null ? '' : userDomain.replace(/"/g,'');
    }

    setFromAndTo(fromto){
        localStorage.setItem('francontact.settings.fromTo',fromto);
    }

    getFromAndTo(){
        let fromTo = localStorage.getItem('francontact.settings.fromTo');
        return fromTo !== null && fromTo.length > 1 ? JSON.parse(fromTo) : null;
    }

    setSelectedText(text){
        localStorage.setItem('francontact.settings.selectedtext', text);
    }

    getSelectedText(){
        localStorage.getItem('francontact.settings.selectedtext');
    }
}