let axios = require('axios');
const instance = axios.create({
    timeout: 1000,
    headers: {'Cookie':'em_acp_globalauth_cookie=deletethiscdb9730a7400f13b7fc0e8e8a8689d611'}
});

let result = instance.get('https://dev.francontact.com/admin/api.php?f=user!ac_user_return_ok&p[]=json&api_output=json')
    .then(function (response) {
        if (200 == response.status && response.data == 'ok'){
            console.log('Yes we login');
        } else {
            console.log('No we not');
        }
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
console.log(result);