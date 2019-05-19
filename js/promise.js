

let user = new User('dev');
let cookie = new Promise( function (resolve, reject) {
    chrome.cookies.get({"url": user.getFullUserDomain(), "name": name}, function(cookie) {
        if("value" in cookie && cookie.value) {
            resolve(cookie.value);
        } else {
            reject();
        }
    });
});
/*
cookie.then(function (cookie) {
    cookieValue = cookie;
    return new Promise( function (resolve, reject) {
        let cookie = 'em_acp_globalauth_cookie=' + cookieValue;

        let instance = axios.create({
            timeout: 1000,
            headers: {'Cookie' : cookie }
        });

        instance.get(`https://${domain}.francontact.com/admin/api.php?f=user!ac_user_return_ok&p[]=json&api_output=json`).then(
            function(response){
                resolve(response);
            }
        ).catch(function (error) {
            reject(error);
        });
    });
}).then(function(response){

    //Yes we login.
    debugger;
});
*/