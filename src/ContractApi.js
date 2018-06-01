const CONTRACT_ADDRESS = "n1wsFqXhnmELcMbVJ844huqA3YNTZusWRa4";
 
class SmartContractApi {
    constructor(contractAdress) {
        var NebPay = require("./dist/nebpay");
        this.nebPay = new NebPay();
        this._contractAdress = contractAdress || CONTRACT_ADDRESS;
    }

    getContractAddress() {
        return this.contractAdress;
    }

    _simulateCall({ value = "0", callArgs = "[]", callFunction , listener }) {
        this.nebPay.simulateCall(this._contractAdress, value, callFunction, callArgs, {  
            listener: listener   
        });
    }
    
    _call({ value = "0", callArgs = "[]", callFunction , listener }) {
        this.nebPay.call(this._contractAdress, value, callFunction, callArgs, {  
            listener: listener   
        });
    } 
}

class AnouncementContractApi extends SmartContractApi{
    add(name, text, cb) {
        this._call({
            callArgs : `["${name}", "${text}", ${Date.now()}]`,
            callFunction : "add", 
            listener: cb
        });
    }

    getByName(name, cb) {
        this._simulateCall({
            callArgs : `["${name}"]`,
            callFunction : "getByName", 
            listener: cb
        });;
    }   
}

export default AnouncementContractApi