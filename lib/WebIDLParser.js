/*
This deletes the WebIDL2 from the window object and makes it available for export. 
*/
define(['../node_modules/webidl2/lib/webidl2'], function() {
    'use strict';
    var parser = window.WebIDL2;
    delete window.WebIDL2;
    return parser;
});
