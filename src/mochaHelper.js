require('babel-register')({
    sourceMaps: true,
});
require('jsdom-global')();
let xmldom = require('xmldom');

global.localStorage = {};
global.XMLSerializer = xmldom.XMLSerializer;
global.DOMParser = xmldom.DOMParser;
