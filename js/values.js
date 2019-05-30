class Values {
    constructor(){
        this.values = {};
    }

    getByTab(tabid){
        return tabid in this.values ? this.values[tabid] : null;
    }

    loadValues(){
        let jsonValues = localStorage.getItem('user.francontact.values');
        this.values = jsonValues !== null && jsonValues.length > 1? JSON.parse(jsonValues) : {};
        return this;
    }

    saveValues(){
        localStorage.setItem('user.francontact.values' , JSON.stringify(this.values));
    }

    addValue(tabid, fromTo){
        this.values[tabid] = fromTo;
        return this;
    }

    removeValue(tabid){
        if (tabid in this.values){
            delete this.values[tabid];
        }
    }
}