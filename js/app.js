class App {
    constructor() {

    }

    getCookie() {
        return "SomeThing"; 
    }
}


function getCookieStatus(){
	let app = new App();
	return app->getCookie();
}