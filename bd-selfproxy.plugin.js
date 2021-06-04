/**
 * @name bd_selfproxy
 * @version 0.0.1
 * @description Two words: \"Fuck etisalat.\"
 * 
 * @author darky & mist8kengas
 * @source https://github.com/mist8kengas/bd-selfproxy
 * @updateUrl https://github.com/mist8kengas/bd-selfproxy/blob/main/bd-selfproxy.plugin.js
 */

const header = {
    name: "bd-selfproxy",
    version: "0.0.1",
    description: "Two words: \"Fuck etisalat.\"",
    author: "darky & mist8kengas"
}

module.exports = class bd_selfproxy {
    /* getName(){
        return header.name;
    }
    getDescription(){
        return header.description;
    }
    getVersion(){
        return header.version;
    }
    getAuthor(){
        return header.author;
    } */
    
    /* main script */
    start(){
        showToast("Your mom", {type: "success", icon: true});
        console.log("Works!", new Date());
    }
    stop(){
        console.log("Stopped script", new Date());
    }
}