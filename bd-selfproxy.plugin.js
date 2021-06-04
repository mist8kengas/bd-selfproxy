/**
 * @name bd_selfproxy
 * @version 0.0.1
 * @description Two words: \"Fuck etisalat.\"
 * 
 * @author mist8kengas
 * @source https://github.com/mist8kengas/bd-selfproxy
 * @updateUrl https://github.com/mist8kengas/bd-selfproxy/blob/main/bd-selfproxy.plugin.js
 */

module.exports = class bd_selfproxy {
    /* main script */
    start(){
        BdApi.showToast("Your''e mom", options = {info: "success"})
        console.log("Works!", new Date());
    }
    stop(){
        console.log("Stopped script", new Date());
    }
}
