// SAMPLE
this.manifest = {
    "name": "FranContact " + i18n.get("settings"),
    "icon": "../../icons/favicon16.png",
    "settings": [
        {
            "tab": i18n.get('main'),
            "group": '',
            "name": "userdomain",
            "type": "text",
            "label": i18n.get("yourdomain"),
            "text": i18n.get("domainplaceholder")
        },
        {
            "tab": i18n.get('main'),
            "group": '',
            "name": "lang",
            "type": "radioButtons",
            "label": i18n.get("language"),
            "text": i18n.get("x-characters"),
            "options": [
                    {
                        "value": "en",
                        "text": "En",
                    },
                    {
                        "value": "fr",
                        "text": 'Fr',
                    }
            ]
        },
    ]
};
