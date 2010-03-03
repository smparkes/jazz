/*jslint evil: true*/
"use strict";
(function(){
  var global = (function(){return this;}());
  global.jazz = global.jazz || {};
  global.jazz.app = global.jazz.app || {};
  global.jazz.app.root = global.jazz.app.root || ".";
  global.jazz.helper = global.jazz.helper || global.jazz.app.root + "/lib/jazz/spec_helper.js";
  document.write("<script type='text/javascript' src='"+global.jazz.helper+"'></script>");
}());
