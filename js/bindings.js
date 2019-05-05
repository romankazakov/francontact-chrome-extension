$(document).ready(function() {
    $('#saveme').click(function(){
        getCookies("http://dev.francontact.com", "PHPSESSID", function(id) {
            alert(id);
        });
    });
});

function getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback) {
            callback(cookie.value);
        }
    });
}; 


