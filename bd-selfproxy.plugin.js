/**
 * @name bd-selfproxy
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

function getName(){
    return header.name;
}
function getDescription(){
    return header.description;
}
function getVersion(){
    return header.version;
}
function getAuthor(){
    return header.author;
}

/* main script */
function start(){
    console.log("Works!", new Date());
}
function stop(){
    console.log("Stopped script", new Date());
}
