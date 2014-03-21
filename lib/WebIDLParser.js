/*
This deletes the WebIDL2 from the window object and makes it available for export. 
*/
define(['webidl2'], function() {
    var parser = window.WebIDL2;
    delete window.WebIDL2;
    return parser;
});
