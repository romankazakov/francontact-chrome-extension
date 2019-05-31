class App {

    constructor(i18n){
        this.i18n = i18n;
    }
    setUpTextLiterals(){
        $('#settings').text(this.i18n.get("settings"));

        $('#link2app').text(this.i18n.get("linktoapp"));

        $('#tasks').text(this.i18n.get("tasks"));

        $('#contacts').text(this.i18n.get("contacts"));

        $('#pleasesetup').text(this.i18n.get("pleasesetup"));

        $('#pleaselogin').text(this.i18n.get("pleaselogin"));

        $('#account').text(this.i18n.get("account"));

        /*i18n.get("domain");
        i18n.get("tasks");
        i18n.get("contacts");
        i18n.get("settings");
        i18n.get("linktoapp");*/
    }
}