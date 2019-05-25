// SAMPLE
this.manifest = {
    "name": "My Extension",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("domain"),
            "group": i18n.get("login"),
            "name": "userdomain",
            "type": "text",
            "label": i18n.get("username"),
            "text": i18n.get("x-characters")
        },
    ],
    "alignment": [
        [
            "userdomain"
        ]
    ]
};
