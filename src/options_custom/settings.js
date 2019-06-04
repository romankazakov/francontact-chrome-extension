window.addEvent("domready", function () {
    // Option 1: Use the manifest:
    let some = new FancySettings.initWithManifest(function (settings) {
        settings.manifest.lang.addEvent("action", function (something) {
            window.location.href = window.location.href;
        });
    });
    
    // Option 2: Do everything manually:

    /*var settings = new FancySettings("FranContact Settings", "../../icons/favicon16.png");
    
    var username = settings.create({
        "tab": i18n.get("domain"),
        "group": '',
        "name": "userdomain",
        "type": "text",
        "label": i18n.get("yourdomain"),
        "text": "https://here-it-is.francontact.com"
    });
    
    var langSwitcher = Bundle.RadioButtons.create({
        "tab"   : i18n.get("domain"),//i18n.get("Language"),
        "group" : '',
        "name"  : "lang",
        "type"  : "radioButtons",
        "label" : i18n.get("Language"),
        "text"  : "https://here-it-is.francontact.com",
        "masked": true
    });*/
    
    /*var myDescription = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("login"),
        "name": "myDescription",
        "type": "description",
        "text": i18n.get("description")
    });
    
    var myButton = settings.create({
        "tab": "Information",
        "group": "Logout",
        "name": "myButton",
        "type": "button",
        "label": "Disconnect:",
        "text": "Logout"
    });
    
    // ...
    
    myButton.addEvent("action", function () {
        alert("You clicked me!");
    });
    settings.align([
        username,
        langSwitcher
    ]);*/
});
